import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import Login from './Pages/Login';
import SearchResults from './Pages/SearchResults';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Headers />

      <Routes>

        <Route path='/signup' element={<Signup />} />

        <Route path='/login' element={<Login />} />

        {/* <Route path='store/:store/:product' element={<SearchResults />} /> */}

        <Route path='store/:store/:product/:page' element={<SearchResults />} />




      </Routes>
    </div>
  );
}

export default App;
