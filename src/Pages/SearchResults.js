import { React, useState, useContext, useEffect, useRef, createRef } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import productFunctions from '../functions/ProductResponse'
import { Link } from 'react-router-dom'


import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import './SearchResults.css'
import LoadingScreen from '../components/LoadingScreen'


const SearchResults = () => {
    const { store, product, page } = useParams()

    const [response, setResponse] = useState([])
    const [responseStatus, setResponseStatus] = useState(0)
    const [pageLimit, setPageLimit] = useState(1)
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState('')

    console.log(store, product, parseInt(page))
    console.log(response)

    useEffect(() => {
        productFunctions.getProducts(
            store, product, page,
            setResponse, setResponseStatus, setPageLimit,
            setLoading
        )
    }, [store, product, page])

    const returnPages = (pages) => {
        for (let i=1 ; i <= pages; i++){
            return (
                <h1>{i}</h1>
            )
        }
    }

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
                                <div className='pagination'>

                                    {parseInt(page) > 1 && 
                                    
                                        <Link to={`/store/${store}/${product}/${page > 0 && parseInt(page) - 1}`} className='prev'><i><FaAngleLeft /></i></Link>
                                    }


                                    {[...Array(pageLimit)].map((item, i) => {
                                       return (
                                           <Link 
                                           
                                           to={`/store/${store}/${product}/${i + 1}`} 

                                           className={`
                                           ${parseInt(page) === 1 && i + 1 === 1 ? 'firstNum' : ''} ${pageLimit != i + 1 ? 'num': parseInt(page) === pageLimit ?'lastNum' : 'num'} ${parseInt(page) === i + 1 ? 'active' : ''}
                                           `}>

                                                {i + 1}

                                           </Link>
                                       )
                                    })}

                                    {parseInt(page) < pageLimit &&
                                        <Link to={`/store/${store}/${product}/${parseInt(page) + 1}`} className='next'><i><FaAngleRight /></i></Link>
                                    }

                                </div>

                                {productFunctions.showProducts(store, response, Link, modal, setModal)}

                            </div>

                            :

                            <div>
                                <h1>No results found</h1>
                            </div>


                        }


                    </div>
                    :

                    null
                    }

                </>
        
        }
            
        </div>
    )
}

export default SearchResults
