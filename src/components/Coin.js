import React from 'react'

const Coin = ({
  id,
  rank,
  logo,
  name,
  symbol,
  price,
  priceChange,
  marketCap
}) => {
  return (
    <tr>
      <td class='align-middle font-monospace fw-bold'>
        <span class='table-ranking'>
          <strong>{rank}.</strong>
        </span>
        <img src={logo} alt={name} width='25' />
        <h2>{name}</h2>
        <span class='badge bg-light text-dark'>{symbol}</span>
      </td>
      <td class='align-middle font-monospace fw-bold'>€ {price}</td>
      <td class='align-middle font-monospace fw-bold'>
        <span class='text'>
          {priceChange < 0 ? (
            <p className='col-md-1 coin-percent red'>
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className='col-md-1 coin-percent green'>
              {priceChange.toFixed(2)}%
            </p>
          )}
        </span>
      </td>
      <td class='align-middle font-monospace fw-bold'>
        €{marketCap.toLocaleString()}
      </td>
    </tr>
  )
}

export default Coin
