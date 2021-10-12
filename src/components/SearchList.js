import React from 'react'
import Coin from './Coin'

const SearchList = ({ filteredCoins }) => {
  return (
    <>
      {filteredCoins?.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            rank={coin.market_cap_rank}
            logo={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h_in_currency}
            marketCap={coin.market_cap}
          />
        )
      })}
    </>
  )
}

export default SearchList
