import axios from 'axios'
import env from 'react-dotenv'

const cartFunctions = {}

cartFunctions.addToCart = async (item_name, item_price, item_link, item_img, setAdded) => {
    try {

        const url = `${process.env.REACT_APP_BACKEND_URL}/cart`

        const response = await axios.post(url, {
            item_name, item_price, item_link, item_img
        }, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        })

        console.log(response.data.Success)

        setAdded(response.data.Success)

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

        setResponse(response.data.carts)
        setResponseStatus(response.status)

    } catch (error) {
        console.log(error)
    }
}





export default cartFunctions