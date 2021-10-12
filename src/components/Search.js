import React, { useState } from 'react'
import SearchList from './SearchList'

import Table from './Table'

const Search = ({ coins }) => {
  const [search, setSearch] = useState('')

  const filteredCoins = coins.filter(
    coin => {
      return (
        coin
          .name
          ?.toLowerCase()
          .includes(search?.toLowerCase())
      )
    }
  )

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className='row mb-5'>
        <div className='col-6'>
          <h2>Market is up</h2>
        </div>
        <div className='col-6'>
          <input
            type='text'
            placeholder='Search'
            className='form-control form-control-lg'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='row'>
        <Table>
          <SearchList filteredCoins={filteredCoins} />
        </Table>
      </div>
    </>
  )
}

export default Search
