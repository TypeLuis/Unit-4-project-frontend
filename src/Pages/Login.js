import { React, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import userFunctions from '../functions/UserResponse'
import './Login.css'


const Login = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <div>
            <h2>Log into your account!</h2>

            {/* { error && 
          <div className="error">{error}</div>} */}

            {error && <div>{error}</div>}

            <form className='user-form'  onSubmit={(e) => { userFunctions.handleUserSubmit(e, email, password, setUser, setError) }}>
                <div className='email'>
                    <label htmlFor="login-email"></label>
                    <input placeholder='Enter email' id="login-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='password'>
                    <label htmlFor="login-password"></label>
                    <input placeholder='Enter you password here' id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input className='form-sub'>Log in!</input>
                </div>
            </form>
        </div>
    )
}

export default Login
