import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NewsCard from '../components/NewsCard'

const API_KEY = process.env.REACT_APP_API_NEWS_KEY
const API_URL = process.env.REACT_APP_API_NEWS_URL

const NewsPage = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllNews = () => {
    axios
      .get(`${API_URL}apiKey=${API_KEY}`)
      .then((response) => {
        console.log(response.data.articles)
        setNews(response.data.articles)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getAllNews()
  }, [])

  return (
    <div className='NewsPage'>
      <h2>Las Cryptocurrencies News</h2>
      <div className='row'>
        <div className='container'>
          {loading && <div>Loading...</div>}
          {!loading &&
            news?.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
