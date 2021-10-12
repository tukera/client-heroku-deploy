import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import CryptosApi from '../services/Cryptocurrency.handler'

const HomePage = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const Api = new CryptosApi()

    Api.getAllCryptos()
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='container'>
      <Search coins={coins} search={search} setSearch={setSearch} />
    </div>
  )
}

export default HomePage
