import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const AddCoins = (props) => {
  const [FavoriteNumber, setFavoriteNumber] = useState(0)
  const [Favorited, setFavorited] = useState(false)

  const variables = {
    id: props.id,
    market_cap_rank: props.coinsInfo.market_cap_rank,
    symbol: props.coinsInfo.symbol,
    name: props.coinsInfo.name,
    image: props.image,
    current_price: props.coinsInfo.current_price,
    market_cap: props.coinsInfo.market_cap,
    price_change_percentage_24h: props.coinsInfo.price_change_percentage_24h
  }

  useEffect(() => {
    axios
      .post(`${API_URL}/favorite/favoriteNumber`, variables, {
        headers: { Authorization: `Bearer ${props.storedToken}` }
      })
      .then((res) => {
        if (res.data.success) {
          setFavoriteNumber(res.data.favoriteNumber)
        } else {
          alert('Failed to get favoriteNumber')
        }
      })

    axios
      .post(`${API_URL}/favorite/favorited`, variables, {
        headers: { Authorization: `Bearer ${props.storedToken}` }
      })
      .then((res) => {
        if (res.data.success) {
          setFavorited(res.data.favorited)
        } else {
          alert('Failed to get Favorite Info')
        }
      })
  }, [])

  return (
    <button type='submit' className='btn btn-primary btn-sm w-100'>
      {Favorited
        ? (<i className='fas fa-star' />)
        : (<i className='fas fa-star' />)}
      | {FavoriteNumber}
    </button>
  )
}

export default AddCoins
