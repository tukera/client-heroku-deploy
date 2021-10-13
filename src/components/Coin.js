import React from 'react'
import AddCoins from './AddCoins'

const Coin = ({
  id,
  rank,
  logo,
  name,
  symbol,
  price,
  priceChange,
  marketCap,
  coinsInfo
}) => {
  const storedToken = localStorage.getItem('authToken')

  return (
    <tr>
      <td className='align-middle font-monospace fw-bold'>
        <span className='table-ranking'>
          <strong>{rank}.</strong>
        </span>
        <img src={logo} alt={name} width='25' className='mx-2' />
        {name}
        <span className='badge bg-light text-dark'>{symbol}</span>
      </td>
      <td className='align-middle font-monospace fw-bold'>
        € {price < 0
        ? (<span className='col-md-1 text-danger'>{price}</span>)
        : (<span className='col-md-1 text-success'>{price}</span>)}
      </td>
      <td>
        <span className='align-middle font-monospace fw-bold'>
          {priceChange < 0
            ? (<span className='col-md-1 coin-percent text-danger'>{priceChange.toFixed(2)}</span>)
            : (<span className='col-md-1 coin-percent text-success'>{priceChange.toFixed(2)}</span>)} %
        </span>
      </td>
      <td className='align-middle font-monospace fw-bold'>
        €{marketCap.toLocaleString()}
      </td>
      <td>
        <AddCoins
          storedToken={storedToken}
          id={id}
          coinsInfo={coinsInfo}
        />
      </td>
    </tr>
  )
}

export default Coin
