import React, { useState, useEffect } from 'react'
import Coin from './Coin'

import CryptosApi from '../services/CryptosHandler'

const Table = () => {
  // const [fetching, setFetching] = useState(true)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const Api = new CryptosApi()

    Api.getAllCryptos()
      .then((coins) => {
        setCoins(coins.data)
      })
      .catch((error) => console.error(error))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name?.toLowerCase().includes(search?.toLowerCase())
  )

  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Search'
          className='coin-input'
          onChange={handleChange}
        />
      </form>
      <table class='table dataTable-table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>% 24h</th>
            <th scope='col'>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                id={coin.id}
                rank={coin.market_cap_rank}
                logo={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h_in_currency}
                marketCap={coin.market_cap}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
