import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Pagination = (props) => {
    const page = parseInt(props.page)
    const product = props.product
    const store = props.store
    const pageLimit = props.pageLimit
    return (
        <div className='pagination'>

            {page > 1 && 
                                        
                <Link to={`/store/${store}/${product}/${page > 0 && page - 1}`} className='prev'><i><FaAngleLeft /></i></Link>
                    }


                    {pageLimit > 10 ?
                        
                        <>
                            {[...Array(pageLimit)].map((item, i) => {

                                const pageNum = i + 1
                                return (


                                    <>
                                        {pageNum ===  1 && page != pageNum &&
                                            
                                            <>
                                                <Link 
                                                    to={`/store/${store}/${product}/${1}`} 
                                                    className={`num`}
                                                >
                                                    1
                                                </Link>

                                                <span className='num'>...</span>
                                            </>



                                        }




                                        { page != 1 ?

                                            <>
                                                {pageNum >= page && pageNum <= page + 7 &&

                                                    <Link 
                                                        to={`/store/${store}/${product}/${pageNum}`} 

                                                        className={`
                                                        ${page === 1 && pageNum === 1 ? 'firstNum' : ''} ${pageLimit != pageNum ? 'num': page === pageLimit ?'lastNum' : 'num'} ${page === pageNum ? 'active' : ''}`}
                                                    >

                                                        {pageNum}

                                                    </Link>
                                                }
                                            </>


                                        
                                        :
                                        
                                            <>
                                                {pageNum >= page && pageNum <= page + 9 &&

                                                    <Link 
                                                        to={`/store/${store}/${product}/${pageNum}`} 

                                                        className={`
                                                        ${page === 1 && pageNum === 1 ? 'firstNum' : ''} ${pageLimit != pageNum ? 'num': page === pageLimit ?'lastNum' : 'num'} ${page === pageNum ? 'active' : ''}`}
                                                    >

                                                        {pageNum}

                                                    </Link>
                                                }
                                            </>
                                        }
                                    </>

                                )
                            })}
                        </>
                    :
                        <>
                            {[...Array(pageLimit)].map((item, i) => {
                                return (

                                    <Link 
                                
                                        to={`/store/${store}/${product}/${i + 1}`} 

                                        className={`
                                        ${page === 1 && i + 1 === 1 ? 'firstNum' : ''} ${pageLimit != i + 1 ? 'num': page === pageLimit ?'lastNum' : 'num'} ${page === i + 1 ? 'active' : ''}`}
                                    >

                                        {i + 1}

                                    </Link>
                                )
                            })}
                        </>
                    }

                    {page < pageLimit &&
                        <Link to={`/store/${store}/${product}/${page + 1}`} className='next'><i><FaAngleRight /></i></Link>
            }


        </div>
    );
};

export default Pagination;
