import axios from 'axios'
import env from 'react-dotenv'

const cartFunctions = {}

cartFunctions.addToCart = async (item_name, item_price, item_link, item_img, setModal) => {
    try {

        const url = `${process.env.REACT_APP_BACKEND_URL}/cart`

        const response = await axios.post(url, {
            'item_name': item_name, 'item_price': item_price, 'item_link': item_link, 'item_img': item_img
        }, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        console.log(response.data.Success)

        setModal(response.data.Success)

        // return alert('hi')


    }
    catch (error) {
        console.log(error)
    }
}


cartFunctions.getCheckout = async (setResponse, setResponseStatus) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/cart`
        const response = await axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        console.log(response)
        const checkedList = await response.data.carts.filter((item) => { return (item.checkedOut !== true) })

        console.log(checkedList)

        setResponse(checkedList)
        setResponseStatus(response.status)

    } catch (error) {
        console.log(error)
    }
}

cartFunctions.showCheckout = (response, switchBool, setSwitchBool, modal, setModal) => {
    try {
        const cartTotal = () => {
            let total = 0
            for (let item of response) {
                total += parseFloat(item.item_price)
            }
            return total
        }
        return (
            <div>
                <h1>Total: ${cartTotal()}</h1>

                <button onClick={() => { cartFunctions.updateCart(switchBool, setSwitchBool, setModal) }}>Checkout</button>

                {modal && cartFunctions.showModal(modal, setModal)}
                {response.map((item, i) => {
                    return (
                        <div>
                            <a href={item.item_link}><h1>{item.item_name}</h1></a>
                            <p><span>${item.item_price}</span></p>
                            <img src={item.item_img} />
                            <div>
                                <button onClick={() => { cartFunctions.removeCart(item.id, switchBool, setSwitchBool, modal, setModal) }}>Remove from cart</button>

                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } catch (error) {
        console.log(error)
    }
}

cartFunctions.removeCart = async (cartId, switchBool, setSwitchBool, modal, setModal) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/cart?id=${cartId}`
        const response = await axios.delete(url, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        setSwitchBool(!switchBool)
        setModal(response.data.Success)

        console.log(response.data.Success)

    } catch (error) {
        console.log(error)
    }
}


cartFunctions.updateCart = async (switchBool, setSwitchBool, setModal) => {
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

        setSwitchBool(!switchBool)
        setModal(response.data.success)

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}




cartFunctions.getOrders = async (setResponse, setResponseStatus) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/cart`
        const response = await axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        let dates = []

        for (let data of response.data.carts) {
            dates.push(data.checkout_date)
        }

        console.log(dates)

        let set = [... new Set(dates)]

        setResponse(set)
        setResponseStatus(response.status)

    } catch (error) {
        console.log(error)
    }
}



cartFunctions.showOrderList = (response, Link) => {
    try {
        console.log(response)
        return (
            <div>
                {response.map((item, i) => {
                    return (
                        <div key={i}>

                            <Link to={`/orders/${i}`}>{item}</Link>
                        </div>
                    )
                })}

            </div>
        )
    } catch (error) {
        console.log(error)
    }
}


cartFunctions.getOrderDetail = async (setResponse, setResponseStatus, id, setDate) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/cart`
        const response = await axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        let dates = []

        for (let data of response.data.carts) {
            dates.push(data.checkout_date)
        }

        console.log(dates)

        let set = [... new Set(dates)]

        const checkedList = response.data.carts.filter((item) => { return (item.checkout_date === set[id]) })

        console.log(checkedList)

        setDate(set[id].split(' GMT')[0])
        setResponse(checkedList)
        setResponseStatus(response.status)

    } catch (error) {
        console.log(error)
    }
}

cartFunctions.showOrderDetail = (response, date) => {
    try {
        const cartTotal = () => {
            let total = 0
            for (let item of response) {
                total += parseFloat(item.item_price)
            }
            return total
        }

        return (
            <div>
                <h1>Ordered on {date}</h1>
                <h1>total ${cartTotal()}</h1>
                {response.map((item, i) => {
                    return (
                        <>
                            <a href={item.item_link}><h1>{item.item_name}</h1></a>
                            <p>${item.item_price}</p>
                            <img src={item.item_img} />
                        </>

                    )
                })}
            </div>
        )

    } catch (error) {
        console.log(error)
    }
}






cartFunctions.showModal = (modal, setModal) => {
    return (
        <div id="myModal" className="modal">

            <div className="modal-content">
                <div className="modal-header">
                    <span onClick={() => { setModal('') }} className="close">&times;</span>
                    <h2>{modal}</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
            </div>

        </div>

    )
}



export default cartFunctions