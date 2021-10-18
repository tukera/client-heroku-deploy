import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '../components/Table'
import Coin from '../components/Coin'

const CurrencyPage = () => {
  const [cryptocurrency, setCryptocurrency] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchCryptocurrency = async () => {
      const response = await axios(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_rank_desc&per_page=100&page=1&price_change_percentage=1y,1h,24h,7d,14d,30d,200d&sparkline=true'
      )
      // console.log(response.data)
      setCryptocurrency(response.data)
      setLoading(false)
    }

    fetchCryptocurrency()
  }, [])

  const filteredCurrency = cryptocurrency?.filter((currency) => {
    return currency.name?.toLowerCase().includes(search?.toLowerCase())
  })

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <section className='CurrencyPage container'>
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
      {loading && <div>Loading...</div>}
      <Table>
        {!loading &&
          filteredCurrency?.map((coins) => <Coin key={coins.id} {...coins} />)}
      </Table>
    </section>
  )
}

export default CurrencyPage
