import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import cartFunctions from '../functions/CartResponse'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    const [switchBool, setSwitchBool] = useState(false)
    const [modal, setModal] = useState('')

    useEffect(() => {
        cartFunctions.getCheckout(setResponse, setResponseStatus)
    }, [switchBool])
    return (
        <div>
            {responseStatus === 200 &&
                <>
                    {cartFunctions.showCheckout(response, switchBool, setSwitchBool, modal, setModal)}
                </>
            }

        </div>
    )
}

export default Checkout
