import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from './../context/auth.context'
import axios from 'axios'

import ButtonHandle from '../components/ButtonHandle'

const Coin = ({ ...coins }) => {
  const { user, userData, setUserData } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')
  const [isDeleted, setIsDeleted] = useState(false)
  const API_URL = process.env.REACT_APP_API_URL

  const cryptocurrency = {
    id: coins.id,
    market_cap_rank: coins.market_cap_rank,
    name: coins.name,
    symbol: coins.symbol,
    image: coins.image,
    current_price: coins.current_price,
    market_cap: coins.market_cap,
    circulating_supply: coins.circulating_supply,
    price_change_percentage_1y_in_currency:
      coins.price_change_percentage_1y_in_currency,
    price_change_percentage_24h_in_currency:
      coins.price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency:
      coins.price_change_percentage_7d_in_currency,
    price_change_percentage_14d_in_currency:
      coins.price_change_percentage_14d_in_currency,
    price_change_percentage_30d_in_currency:
      coins.price_change_percentage_30d_in_currency,
    price_change_percentage_200d_in_currency:
      coins.price_change_percentage_200d_in_currency,
    price_change_1y: coins.price_change_percentage_1y_in_currency
  }

  const handleDelete = () => {
    axios({
      method: 'POST',
      url: `${API_URL}/delete-favorite`,
      data: { cryptocurrency, user: user }
    })
      .then((result) => {
        setUserData(result.data.cryptocurrency)
        setIsDeleted(true)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (userData && userData.favorites && cryptocurrency) {
      const foundCrypto = userData.favorites.filter((cryptocurrency) => {
        return coins.id === cryptocurrency._id
      })
      if (foundCrypto.length === 0) {
        setIsDeleted(true)
      } else {
        setIsDeleted(false)
      }
    }
  }, [userData, cryptocurrency])

  return (
    <>
      <tr>
        <td className='align-middle font-monospace fw-bold'>
          <span className='table-ranking'>
            <strong>{coins.market_cap_rank}.</strong>
          </span>
          <img src={coins.image} alt={coins.name} width='25' className='mx-2' />
          {coins.name}
          <span className='badge bg-light text-dark'>{coins.symbol}</span>
        </td>
        <td className='align-middle font-monospace fw-bold'>
          {coins.current_price < 0 ? (
            <span className='col-md-1 text-danger'>
              € {coins.current_price}
            </span>
          ) : (
            <span className='col-md-1 text-success'>
              € {coins.current_price}
            </span>
          )}
        </td>
        <td>
          <span className='align-middle font-monospace fw-bold'>
            {coins.price_change_percentage_24h_in_currency < 0 ? (
              <span className='col-md-1 coin-percent text-danger'>
                {coins.price_change_percentage_24h_in_currency.toFixed(2)} %
              </span>
            ) : (
              <span className='col-md-1 coin-percent text-success'>
                {coins.price_change_percentage_24h_in_currency.toFixed(2)} %
              </span>
            )}
          </span>
        </td>
        <td className='align-middle font-monospace fw-bold'>
          € {coins.market_cap.toLocaleString()}
        </td>
        <td>
        <button onClick={handleDelete} className='btn btn-danger btn-sm w-100'>
          <i className='fas fa-star' />
        </button>
        </td>
      </tr>
    </>
  )
}

export default Coin
