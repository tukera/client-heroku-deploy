import axios from 'axios'

class CryptosApi {
  constructor () {
    const storedToken = localStorage.getItem('authToken')

    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: `Bearer ${storedToken}` }
    })
  }

  getAllCryptos () {
    return this.api.get('/')
  }

  // getPrices (id, day) {
  //   return this.api.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${day}`)
  // }
}

export default CryptosApi
