import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
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
// import './switcher.scss'
import axios from 'axios'
import Home from './Pages/Home';
import LoadingScreen from './components/LoadingScreen';
import StripeTest from './Pages/StripeTest';

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

  



  return (
    <div className={`App ${colorTheme}`}>
      <Headers setColorTheme={setColorTheme} />


      <Routes>

        <Route path='test' element={<Test />} />

        <Route path='/*' element={<NoPage />}/>

        <Route path='/' element={
          <Home />
          // user.email ?
          //   <Navigate to={'/store/ebay/3080/1'} />
          // :
          //   <Navigate to={'/signup'} />
        }/>

        <Route path='/signup' element={
          user.email ?
          <Navigate to={'/'} />
        :
          <Signup />
        } />



        <Route path='/login' element={
          user.email ?
            <Navigate to={'/'} />
          :
            <Login />
        } />

        {/* <Route path='store/:store/:product' element={<SearchResults />} /> */}

        <Route path='/store/:store/:product/:page' element={<SearchResults />} />

        <Route path='/loading' element={ <LoadingScreen /> } />

        {/* <Route path='/stripe' element={ <StripeTest />} />
        <Route path='/stripe/success' element={ <StripeTest />} />
        <Route path='/stripe/cancel' element={ <StripeTest />} /> */}

        <Route path='/order/checkout' element={
          // user.email ?
            <StripeTest />
          // :
          //   <Navigate to={'/signup'} />
        } />

        

        <Route path='/product/:store/:productId' element={<ProductPage />} />

        {/* <Route path='/checkout' element={
          user.email ?
            <Checkout />
          :
            <Navigate to={'/signup'} />
        } /> */}

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
