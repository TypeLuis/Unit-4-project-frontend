import React from 'react'
import { Link, Route } from 'react-router-dom'
import { UserContext } from "../context/UserContext"
import { useState, useContext, useEffect, useRef } from 'react'
import './Header.scss'
import SearchForm from './SearchForm'

import { FaBars } from "react-icons/fa";

const Headers = (props) => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [burger, setBurger] = useState(false)
    const [content, setContent] = useState(false)

    const myContainer = useRef(null);

    useEffect(() => {
    
        console.log(myContainer)
        console.log(myContainer.current.getBoundingClientRect())
        console.log(window.getComputedStyle(myContainer.current).getPropertyValue('height'))
    });

    const handleClick = (theme) => {
        props.setColorTheme(theme)
        localStorage.setItem('theme-color', theme)
    }


    const handleBurgerClick = () => {
        if(burger === true){
            setContent(!content)
            setTimeout(()=> {setBurger(!burger)}, 450)
        }
        else{
            setBurger(!burger)
            setContent(!content)
        }
    }

    return (
        <div>
            <nav ref={myContainer} className={`navbar ${String(content)}`}>

                <div className='links big'>
                    {user.email ?



                        <div className='userShows'>
                            <Link to={`/order/checkout`}>checkout</Link>
                            <Link to={`/orders`}>orders</Link>
                            <Link to='/login' onClick={() => { setUser({}); localStorage.removeItem('userId') }} >Logout</Link>
                        </div>

                        :
                        <>

                            <Link to='/signup' >Signup</Link>

                            <Link to='/login' >login</Link>

                        </>

                    }
                </div>
 

                <span className='theme-options big'>
                    <span onClick={()=>{handleClick('theme-bubble')}} id='theme-bubble'/>
                    <span onClick={()=>{handleClick('theme-sky')}} id='theme-sky'/>
                    <span onClick={()=>{handleClick('theme-dark')}} id='theme-dark'/>
                    <span onClick={()=>{handleClick('theme-original')}} id='theme-original'/>
                </span>

                <span onClick={handleBurgerClick} className='hamburger'>
                    <FaBars />
                </span>





                {burger &&
            
                    <div className={`burger-content ${String(content)}`}>
                        
                        <ol>
                            <li>
                                <span className='theme-options smallBurger'>
                                    <span onClick={()=>{handleClick('theme-bubble')}} id='theme-bubble'/>
                                    <span onClick={()=>{handleClick('theme-sky')}} id='theme-sky'/>
                                    <span onClick={()=>{handleClick('theme-dark')}} id='theme-dark'/>
                                    <span onClick={()=>{handleClick('theme-original')}} id='theme-original'/>
                                </span>
                            </li>

                           
                            {user.email ?



                                <>

                                    <li><Link to={`/order/checkout`}>checkout</Link></li>

                                    <li><Link to={`/orders`}>orders</Link></li>

                                    <li><Link to='/login' onClick={() => { setUser({}); localStorage.removeItem('userId') }} >Logout</Link></li>
                                </>

                                :
                                <>

                                    <li><Link to='/signup' >Signup</Link></li>

                                    <li><Link to='/login' >login</Link></li>
                                </>

                            }

                            {/* <li>Portfolio</li> */}

                        </ol>
                        
                    </div>


                }


                <SearchForm />


            </nav>
            <div id='space'></div>
        </div>
    )
}

export default Headers
