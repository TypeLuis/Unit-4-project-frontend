import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import cartFunctions from '../functions/CartResponse'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)

    useEffect(() => {
        cartFunctions.getCheckout(setResponse, setResponseStatus)
    }, [])
    return (
        <div>
            { }
        </div>
    )
}

export default Checkout
