import axios from 'axios'
import env from 'react-dotenv'

const userFunctions = {}

userFunctions.handleUserSubmit = async (e, email, password, setUser, setError) => {
    e.preventDefault()
    try {
        const currentWindow = window.location.pathname === '/signup'
        console.log(currentWindow)
        const extension = currentWindow ? 'users' : 'users/login'
        console.log(extension)
        const url = `${process.env.REACT_APP_BACKEND_URL}/${extension}`
        console.log(url)
        const response = await axios.post(url, { "email": email, "password": password })

        console.log(response)

        setUser(response.data.user)
        localStorage.setItem('userId', response.data.user_id)
    }
    catch (error) {
        // setError(error.response.data.message)
        console.log(error)
    }
}


userFunctions.fetchUser = async (setUser) => {
    try {
      const userId = localStorage.getItem('userId')
      if (userId) {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`, {
          headers: {
            Authorization: userId
          }
        })
        console.log(response)
        setUser(response.data.user)
      }
    }
    catch (error) { console.log(error) }

  }




export default userFunctions