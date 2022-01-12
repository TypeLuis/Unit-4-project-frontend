import React from 'react'
import { Link, Route } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import { useState, useContext, useEffect } from 'react'
import './Header.css'

const Headers = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    return (
        <div>
            <nav className='navbar'>

                {localStorage.getItem('userId') ?



                    <div className='userShows'>
                        <Link to={`/checkout`}>checkout</Link>
                        <Link to={`/orders`}>orders</Link>
                        <Link to='/login' onClick={() => { setUser({}); localStorage.removeItem('userId') }} >Logout</Link>
                    </div>

                    :
                    <>

                        <Link to='/signup' >Signup</Link>

                        <Link to='/login' >login</Link>

                    </>

                }




                <Link to='/search' >Search</Link>



            </nav>
        </div>
    )
}

export default Headers
