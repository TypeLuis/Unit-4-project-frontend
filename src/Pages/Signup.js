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
        <div>

            {error && <div>{error}</div>}

            <form onSubmit={(e) => { userFunctions.handleUserSubmit(e, email, password, setUser, setError) }}>
                <div>
                    <label htmlFor="signup-email">Email:</label>
                    <input id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="signup-password">Password:</label>
                    <input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Sign up!" ></input>
                </div>

            </form>
        </div>
    )
}

export default Signup
