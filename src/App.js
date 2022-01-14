import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import SearchForm from './components/SearchForm';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import SearchResults from './Pages/SearchResults';
import Signup from './Pages/Signup';

import { UserContext } from "./context/UserContext"
import { useState, useContext, useEffect } from 'react'
import userFunctions from './functions/UserResponse';

import Checkout from './Pages/Checkout'
import Order from './Pages/Order';
import OrderDetails from './components/OrderDetails';
import NoPage from './Pages/NoPage';
import Test from './Pages/Test';
import './switcher.scss'

function App() {

  const [colorTheme, setColorTheme] = useState('theme-original')
  const { userState} = useContext(UserContext)
  const [user, setUser] = userState

  useEffect(()=>{userFunctions.fetchUser(setUser)}, [])


  useEffect(()=>{
    const currentThemeColor = localStorage.getItem('theme-color')

    if(currentThemeColor){
      setColorTheme(currentThemeColor)
    }
  }, [])

  const handleClick = (theme) => {
    setColorTheme(theme)
    localStorage.setItem('theme-color', theme)
  }


  return (
    <div className={`App ${colorTheme}`}>
      <Headers />

      <div className='theme-options'>
        <div onClick={()=>{handleClick('theme-bubble')}} id='theme-bubble'/>
        <div onClick={()=>{handleClick('theme-sky')}} id='theme-sky'/>
        <div onClick={()=>{handleClick('theme-dark')}} id='theme-dark'/>
        <div onClick={()=>{handleClick('theme-original')}} id='theme-original'/>
      </div>



      <Routes>

        <Route path='test' element={<Test />} />

        <Route path='/*' element={<NoPage />}/>

        <Route path='/' element={
          user.email ?
            <Navigate to={'/store/ebay/3080/1'} />
          :
            <Navigate to={'/signup'} />
        }/>

        <Route path='/signup' element={
          user.email ?
          <Navigate to={'/store/ebay/3080/1'} />
        :
          <Signup />
        } />



        <Route path='/login' element={
          user.email ?
            <Navigate to={'/store/ebay/3080/1'} />
          :
            <Login />
        } />

        {/* <Route path='store/:store/:product' element={<SearchResults />} /> */}

        <Route path='/store/:store/:product/:page' element={<SearchResults />} />

        

        <Route path='/product/:store/:productId' element={<ProductPage />} />

        <Route path='/checkout' element={
          user.email ?
            <Checkout />
          :
            <Navigate to={'/signup'} />
        } />

        <Route path='/orders' element={
          user.email ?
            <Order />
          :
            <Navigate to={'/signup'} />
        } />


        <Route path='/orders/:id' element={
          user.email ?
            <OrderDetails />
          :
          <Navigate to={'/signup'} />
        } />



      </Routes>
    </div>
  );
}

export default App;
