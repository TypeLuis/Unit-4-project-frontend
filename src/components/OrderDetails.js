import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import cartFunctions from '../functions/CartResponse'
import { Link } from 'react-router-dom'


const OrderDetails = () => {
    const { id } = useParams()

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    const [date, setDate] = useState(0)

    useEffect(() => {
        cartFunctions.getOrderDetail(setResponse, setResponseStatus, id, setDate)
    }, [id])
    return (
        <div>

            {responseStatus === 200 &&

                <>
                    {cartFunctions.showOrderDetail(response, date)}
                </>

            }

        </div>
    )
}

export default OrderDetails
