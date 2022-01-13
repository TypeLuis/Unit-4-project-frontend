import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import SearchForm from './components/SearchForm';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import SearchResults from './Pages/SearchResults';
import Signup from './Pages/Signup';

import Checkout from './Pages/Checkout'
import Order from './Pages/Order';
import OrderDetails from './components/OrderDetails';

function App() {
  return (
    <div className="App">
      <Headers />
      <SearchForm />

      <Routes>

        <Route path='/signup' element={<Signup />} />

        <Route path='/login' element={<Login />} />

        {/* <Route path='store/:store/:product' element={<SearchResults />} /> */}

        <Route path='/store/:store/:product/:page' element={<SearchResults />} />

        <Route path='/product/:store/:productId' element={<ProductPage />} />

        <Route path='/checkout' element={<Checkout />} />

        <Route path='/orders' element={<Order />} />

        <Route path='/orders/:id' element={<OrderDetails />} />



      </Routes>
    </div>
  );
}

export default App;
