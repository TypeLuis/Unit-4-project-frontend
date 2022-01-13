import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import cartFunctions from '../functions/CartResponse'
import { Link } from 'react-router-dom'

const Order = () => {

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)

    useEffect(() => {
        cartFunctions.getOrders(setResponse, setResponseStatus)
    }, [])
    return (
        <div>
            {responseStatus === 200 &&

                <>
                    {cartFunctions.showOrderList(response, Link)}
                </>


            }
        </div>
    )
}

export default Order
