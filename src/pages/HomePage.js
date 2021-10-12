import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import CryptosApi from '../services/Cryptocurrency.handler'

const HomePage = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const Api = new CryptosApi()

    Api.getAllCryptos()
      .then((coins) => {
        setCoins(coins.data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='container'>
      <Search coins={coins} />
    </div>
  )
}

export default HomePage
