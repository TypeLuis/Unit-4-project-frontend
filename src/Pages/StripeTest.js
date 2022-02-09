import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import cartFunctions from "../functions/CartResponse";

const Message = ({ message }) => (
  <section>
    <p className="checkoutMessage">{message}</p>
  </section>
);

export default function StripeTest() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [responseStatus, setResponseStatus] = useState(1);
  const [bool, setBool] = useState(false)
  const myContainer = useRef(null);

  const cart = async () => {
      const cartResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })
      console.log(cartResponse) 

      setResponse(cartResponse.data.carts)
      setResponseStatus(cartResponse.status)
  }

    const cartTotal = () => {
        let total = 0
        for (let item of response) {
            console.log(item.quantity)
            const amount = parseFloat(item.info.item_price) * item.quantity
            total += amount
        }
        return total
    }

  const updateCart = async (content, item_price, item_name, item_link, item_img, cartId) => {
    switch(content){
        case '+':
            try {
                
                const url = `${process.env.REACT_APP_BACKEND_URL}/cart`
    
                const response = await axios.post(url, {
                    'item_name': item_name, 'item_price': item_price, 'item_link': item_link, 'item_img': item_img
                },{
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

                setBool(!bool)
            } catch (error) {
                console.log(error)
            }
        break
            
        case '-':
            try {
                const url = `${process.env.REACT_APP_BACKEND_URL}/cart?id=${cartId}`
                const response = await axios.delete(url,{
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })
                setBool(!bool)
        } catch (error) {
            console.log(error)
        }
        
        break
    }
  }

  const completeCart = () => {
      try {
        const options = {
            method: 'PUT',
            url: `${process.env.REACT_APP_BACKEND_URL}/cart`,
            data: { "date": String(new Date()) },
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        };

        const response = await axios.request(options)
        console.log(response)

        setSwitchBool(!switchBool)

    } catch (error) {
        console.log(error)
    }
  }

  const test = async (e) => {
      try {
          
          e.preventDefault()
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`,{"id" : localStorage.getItem('userId')})

          console.log(response)
          window.location = response.data.url
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query)
    // console.log('window', window.location)

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      completeCart()
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);


  useEffect(() => {cart(); cartTotal()}, [bool]);

  return message ? (
      <div className="checkoutBody">

          <Message message={message} />
      </div>
  ) : (
      <div className="checkoutBody">
          
            {responseStatus === 200 &&
            
                <div className="checkout-content">
                    <section>

                        <h1>total: ${cartTotal()}</h1>


                        {response.map((item, i) => {
                            return(

                                <div key={i} className="product">
                                    <img
                                        src={item.info.item_img}
                                        alt="The cover of Stubborn Attachments"
                                    />
                                    <div className="description">
                                    <h3>{item.info.item_name}</h3>
                                    <h5>${item.info.item_price}</h5>
                                    <h5>Qty {item.quantity} 
                                    <span
                                        onClick={(e)=>{updateCart(e.target.textContent, item.info.item_price, item.info.item_name, item.info.item_link, item.info.item_img, item.info.id)}}
                                    >-</span> 
                                    <span
                                        onClick={(e)=>{updateCart(e.target.textContent, item.info.item_price, item.info.item_name, item.info.item_link, item.info.item_img, item.info.id)}}
                                    >+</span>
                                    
                                    
                                    </h5>
                                    </div>
                                </div>
                            )

                        })}
                        
                        <form className="checkout-form" >
                            <button className="checkoutButton" type="submit" onClick={(e)=>{test(e)}}>
                                Checkout
                            </button>
                        </form>
                    </section>
        
                </div>
            }
      </div>
  );
}
// <ProductDisplay response={response} />
// action={`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`} method="POST"