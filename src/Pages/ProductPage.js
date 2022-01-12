import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import { Link } from 'react-router-dom'
import './ProductPage.css'

const ProductPage = () => {
    const { store, productId } = useParams()

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    console.log(store, productId)

    useEffect(() => {
        productFunctions.getProductPage(
            store, productId,
            setResponse, setResponseStatus
        )
    }, [store, productId])
    return (
        <div>
            {responseStatus === 200 ?

                <div>


                    {productFunctions.showProductPage(store, productId, response)}

                </div>
                :

                null
            }
        </div>
    )
}

export default ProductPage
