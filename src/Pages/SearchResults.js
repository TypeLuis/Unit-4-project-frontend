import { React, useState, useContext, useEffect, useRef, createRef } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import { Link } from 'react-router-dom'




import './SearchResults.css'
import LoadingScreen from '../components/LoadingScreen'
import Pagination from '../components/Pagination'


const SearchResults = () => {
    const { store, product, page } = useParams()

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    const [pageLimit, setPageLimit] = useState(1)
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')

    useEffect(() => {
        productFunctions.getProducts(
            store, product, page,
            setResponse, setResponseStatus, setPageLimit,
            setLoading
        )
    }, [store, product, page])


    return (
        <div>
            {loading ?
            
                <LoadingScreen />

            :

                <>
                
                {responseStatus === 200 ?

                    <div>

                        {response.length > 0 ?

                            <div >
                                <Pagination product={product} store={store} page={page} pageLimit={pageLimit}/>

                                {productFunctions.showProducts(store, response, Link, modal, setModal)}

                            </div>

                            :

                            <div>
                                <h1>No results found</h1>
                            </div>


                        }


                    </div>
                :

                    <>
                        <h1>Error</h1>
                    </>
                }

                </>
        
        }
            
        </div>
    )
}

export default SearchResults
