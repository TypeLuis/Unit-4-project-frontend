import { React, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import userFunctions from '../functions/UserResponse'


const Login = () => {
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    return (
        <div>
            <h2>Log into your accout!</h2>

            {/* { error && 
          <div className="error">{error}</div>} */}

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
                    <input type="submit" value="Log in!" ></input>
                </div>
            </form>
        </div>
    )
}

export default Login
