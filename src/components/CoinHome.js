import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from './../context/auth.context'
import axios from 'axios'

const Coin = ({ ...coins }) => {
  const { user, userData, setUserData } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken')
  const API_URL = process.env.REACT_APP_API_URL

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
      </tr>
    </>
  )
}

export default Coin
