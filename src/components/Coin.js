import React from 'react'

const Coin = ({ ...coins }) => {
  const storedToken = localStorage.getItem('authToken')

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
        €{' '}
        {coins.current_price < 0 ? (
          <span className='col-md-1 text-danger'>{coins.current_price}</span>
        ) : (
          <span className='col-md-1 text-success'>{coins.current_price}</span>
        )}
      </td>
      <td>
        <span className='align-middle font-monospace fw-bold'>
          {coins.price_change_24h < 0 ? (
            <span className='col-md-1 coin-percent text-danger'>
              {coins.price_change_24h.toFixed(2)}
            </span>
          ) : (
            <span className='col-md-1 coin-percent text-success'>
              {coins.price_change_24h.toFixed(2)}
            </span>
          )}{' '}
          %
        </span>
      </td>
      <td className='align-middle font-monospace fw-bold'>
        €{coins.market_cap.toLocaleString()}
      </td>
      <td>
        <i className='fas fa-star' />
      </td>
    </tr>
  )
}

export default Coin
