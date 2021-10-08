import React from 'react'
import millify from 'millify'

const HomePage = ({ fetching, coins }) => {
  return (
    <div>
      <div className='container mx-auto px-4 sm:px-8 max-w-8xl'>
        <div className='py-8'>
          <div className='flex flex-row mb-1 sm:mb-0 justify-between w-full'>
            <h2 className='text-2xl leading-tight'>Cryptocurrency</h2>
          </div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                    >
                      % 24h
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                    >
                      Market Cap
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-sm uppercase font-normal'
                    >
                      Watch
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coins?.map((coin) => (
                    <tr key={coin.id}>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex items-center'>
                          <strong>{coin.market_cap_rank}.</strong>
                          <div className='flex-shrink-0'>
                            <a href='#' className='block relative'>
                              <img
                                alt={coin.name}
                                src={coin.image}
                                className='mx-auto object-cover rounded-full h-10 w-10 '
                              />
                            </a>
                          </div>
                          <div className='ml-3'>
                            {coin.name}
                            <p>{coin.symbol.toUpperCase()}</p>
                          </div>
                        </div>
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {coin.current_price < 0
                          ? (<p className='coin-percent red'>€ {millify(coin.current_price.toFixed(2))}</p>)
                          : (<p className='coin-percent green'>€ {millify(coin.current_price.toFixed(2))}</p>)}
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {coin.price_change_percentage_24h_in_currency < 0
                          ? (<p className='coin-percent red'>{millify(coin.price_change_percentage_24h_in_currency.toFixed(2))} %</p>)
                          : (<p className='coin-percent green'>{millify(coin.price_change_percentage_24h_in_currency.toFixed(2))} %</p>)}
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {coin.market_cap < 0
                          ? (<p className='coin-percent red'>€ {millify(coin.market_cap.toFixed(2))}</p>)
                          : (<p className='coin-percent green'>€ {millify(coin.market_cap.toFixed(2))}</p>)}
                      </td>
                      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Add
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between'>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100'
                  >
                    <svg
                      width='9'
                      fill='currentColor'
                      height='8'
                      className=''
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z' />
                    </svg>
                  </button>
                  <button
                    type='button'
                    className='w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 '
                  >
                    1
                  </button>
                  <button
                    type='button'
                    className='w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100'
                  >
                    2
                  </button>
                  <button
                    type='button'
                    className='w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100'
                  >
                    3
                  </button>
                  <button
                    type='button'
                    className='w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100'
                  >
                    4
                  </button>
                  <button
                    type='button'
                    className='w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100'
                  >
                    <svg
                      width='9'
                      fill='currentColor'
                      height='8'
                      className=''
                      viewBox='0 0 1792 1792'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
