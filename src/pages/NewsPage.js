import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NewsCard from '../components/NewsCard'

const API_KEY = process.env.REACT_APP_API_NEWS_KEY
const API_URL = process.env.REACT_APP_API_NEWS_URL
// # https://newsapi.org/v2/everything?q=cryptocurrencies&apiKey=883eb66584f04c30a3b6df5b370d31ea
// console.log(`${API_URL}apiKey=${API_KEY}`)

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${API_URL}apiKey=${API_KEY}`)
      .then((response) => {
        console.log(response.data.articles)
        setNews(response.data.articles)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='NewsPage'>
      <h2>Las Cryptocurrencies News</h2>
      <div className='row'>
        <div className='container'>
          {loading && <div>Loading...</div>}
          {!loading && news?.map((article, index) => <NewsCard key={index} {...article} />)}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
