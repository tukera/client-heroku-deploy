import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import CryptosApi from '../services/Cryptocurrency.handler'
import CoinHistory from '../components/CoinHistory'
import CoinDetail from '../components/CoinDetail'

const CoinDetailPage = () => {
  const { id } = useParams()
  const [day, setDay] = useState([])
  const [week, setWeek] = useState([])
  const [year, setYear] = useState([])

  useEffect(() => {
    const Api = new CryptosApi()
    const oneDay = Api.getPrices(id, 1)
    const oneWeek = Api.getPrices(id, 7)
    const oneYear = Api.getPrices(id, 8)

    const formatData = data => {
      return data.map(e => {
        return {
          t: e[0],
          y: e[1].toFixed(2)
        }
      })
    }

    oneDay
      .then((oneDay) => {
        setDay({
          day: formatData(oneDay.data.prices)
        })
      })
      .catch((error) => console.error(error))

    oneWeek
      .then((oneWeek) => {
        setWeek({
          week: formatData(oneWeek.data.prices)
        })
      })
      .catch((error) => console.error(error))

    oneYear
      .then((oneYear) => {
        setYear({
          year: formatData(oneYear.data.prices)
        })
      })
      .catch((error) => console.error(error))
  }, [])

  const renderData = () => {
    return (
      <div className='coinList'>
        <CoinHistory day={day} week={week} year={year} />
        <CoinDetail />
      </div>
    )
  }

  return renderData()
}

export default CoinDetailPage
