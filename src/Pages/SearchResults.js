import { React, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import { Link } from 'react-router-dom'


const SearchResults = () => {
    const { store, product, page } = useParams()

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    const [pageLimit, setPageLimit] = useState(1)

    console.log(store, product, parseInt(page))
    console.log(response)

    useEffect(() => {
        productFunctions.getProducts(
            store, product, page,
            setResponse, setResponseStatus, setPageLimit
        )
    }, [store, product, page])

    return (
        <div>

            {responseStatus === 200 ?

                <div>
                    {productFunctions.showProducts(store, response, Link)}

                </div>
                :

                null
            }
        </div>
    )
}

export default SearchResults
