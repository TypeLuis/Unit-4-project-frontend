import { React, useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import userFunctions, { userFunction } from '../functions/UserResponse'
import axios from 'axios'


const Signup = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    return (
        <div className='user-form'>
            <div className='form-acc'>

            <h2>Signup to your account!</h2>

                {error && <div>{error}</div>}

                <form  onSubmit={(e) => { userFunctions.handleUserSubmit(e, email, password, setUser, setError) }}>
                    <div className='email'>
                        <label  htmlFor="signup-email"></label>
                        <input placeholder='Enter email' id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='password' >
                        <label htmlFor="signup-password"></label>
                        <input placeholder='Enter you password here' id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <button className='form-sub' >Sign up!</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup
