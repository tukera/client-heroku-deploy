import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from './../context/auth.context'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const Coin = ({ ...coins }) => {
  const { user, userData, setUserData } = useContext(AuthContext)
  const [isClicked, setIsClicked] = useState(false)
  const [seeDetails, setSeeDetails] = useState(false)
  const storedToken = localStorage.getItem('authToken')

  const cryptocurrency = {
    id: coins.id,
    market_cap_rank: coins.market_cap_rank,
    name: coins.name,
    symbol: coins.symbol,
    image: coins.image,
    price: coins.current_price,
    price_change_1h: coins.price_change_percentage_1h_in_currency,
    price_change_24h: coins.price_change_percentage_24h,
    price_change_7d: coins.price_change_percentage_7d_in_currency,
    price_change_14d: coins.price_change_percentage_14d_in_currency,
    price_change_30d: coins.price_change_percentage_30d_in_currency,
    price_change_200d: coins.price_change_percentage_200d_in_currency,
    price_change_1y: coins.price_change_percentage_1y_in_currency,
    price_change_percentage_7d_in_currency:
      coins.price_change_percentage_7d_in_currency
  }

  console.log(coins)

  const handleSubmit = () => {
    axios({
      method: 'POST',
      url: `${API_URL}/add-favorite`,
      data: { cryptocurrency, user: user },
      headers: { Authorization: `Bearer ${storedToken}` }
    })
      .then((result) => {
        // console.log('Result: ', result.data)
        setUserData(result.data.cryptocurrency)
        setIsClicked(true)
      })
      .catch((error) => console.log(error))
  }

  const handleDelete = () => {
    axios({
      method: 'POST',
      url: `${API_URL}/delete-favorite`,
      data: { cryptocurrency, user: user }
    })
      .then((result) => {
        setUserData(result.data.cryptocurrency)
        setIsClicked(false)
      })
      .catch((error) => console.log(error))
  }

  const handleClick = () => {
    if (seeDetails === false) {
      setSeeDetails(true)
    } else {
      setSeeDetails(false)
    }
  }

  useEffect(() => {
    if (userData && userData.cryptocurrency && coins) {
      const foundCrypto = userData.cryptocurrency.filter((cryptocurrency) => {
        return cryptocurrency.id === coins.id
      })
      if (foundCrypto.length === 0) {
        setIsClicked(false)
      } else {
        setIsClicked(true)
      }
    }
  }, [userData, coins])

  return (
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
          <span className='col-md-1 text-danger'>€ {coins.current_price}</span>
        ) : (
          <span className='col-md-1 text-success'>€ {coins.current_price}</span>
        )}
      </td>
      <td>
        <span className='align-middle font-monospace fw-bold'>
          {coins.price_change_24h < 0 ? (
            <span className='col-md-1 coin-percent text-danger'>
              {coins.price_change_24h} %
            </span>
          ) : (
            <span className='col-md-1 coin-percent text-success'>
              {coins.price_change_24h} %
            </span>
          )}
        </span>
      </td>
      <td className='align-middle font-monospace fw-bold'>
        € {coins.market_cap}
      </td>
      <td>
        <button
          onClick={handleSubmit}
          type='submit'
          className='btn btn-primary btn-sm w-100'
        >
          <i className='fas fa-star' />
        </button>
        <button
          onClick={handleDelete}
          type='submit'
          className='btn btn-primary btn-sm w-100'
        >
          <i className='fas fa-star' />
        </button>
      </td>
    </tr>
  )
}

export default Coin
