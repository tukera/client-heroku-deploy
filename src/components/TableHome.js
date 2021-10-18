import React from 'react'

const Table = (props) => {
  return (
    <table className='table table-bordered'>
      <thead className=''>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">% 24h</th>
          <th scope="col">Market Cap</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  )
}

export default Table
