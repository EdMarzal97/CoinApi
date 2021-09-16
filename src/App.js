import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { CryptoTable } from './components/CryptoTable';

function App() {

  const [Crypto, setCrypto] = useState([])
  const [Search, setSearch] = useState('')


  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
    setCrypto(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    
    <div className="container">
      <div className='header container'>
          <h1 className='text-center m-4 align-middle' >Coin Market</h1>
      </div>
      <div className='row'>
        <input type="text" placeholder='Search a currency' className='form-control bg-dark text-light border-0 mt-4 px-3' onChange={e => setSearch(e.target.value)} />
        <CryptoTable Crypto={Crypto} Search={Search} />
      </div>
    </div>
  );
}

export default App;
