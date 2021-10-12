import React, { useState, useEffect } from 'react'
// import Search from '../components/Search'
// import CryptosApi from '../services/Cryptocurrency.handler'

import SearchList from '../components/SearchList'
import Table from '../components/Table'
import axios from 'axios'

const HomePage = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  // let filteredCoins

  // useEffect(() => {
  //   const Api = new CryptosApi()

  //   Api.getAllCryptos()
  //     .then((res) => {
  //       setCoins(res.data)
  //     })
  //     .catch((error) => console.error(error))
  // }, [])
  
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_rank_desc&per_page=100&page=1&price_change_percentage=1y,1h,24h,7d,14d,30d,200d&sparkline=true')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, [])

  const filteredCoins = coins?.filter(
    coin => {
      return (
        coin
          .name
          ?.toLowerCase()
          .includes(search?.toLowerCase())
      )
    }
  )
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='container'>
      {/* <Search coins={coins} search={search} setSearch={setSearch} /> */}
      <div className='row mb-5'>
        <div className='col-6'>
          <h2>Market is up</h2>
        </div>
        <div className='col-6'>
          <input
            type='text'
            placeholder='Search'
            className='form-control form-control-lg'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <Table>
          <SearchList filteredCoins={filteredCoins} />
        </Table>
      </div>
    </div>
  )
}

export default HomePage
