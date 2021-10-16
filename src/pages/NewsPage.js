import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NewsCard from '../components/NewsCard'

function NewsPage () {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://webit-news-search.p.rapidapi.com/search',
    params: {
      q: 'cryptocurrency',
      language: 'en',
      number: '10',
      offset: '0',
      has_image: 'true'
    },
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_API_NEWS_URL,
      'x-rapidapi-key': process.env.REACT_APP_API_NEWS_KEY
    }
  }

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios(options)
      // console.log(response.data.data.results)
      setNews(response.data.data.results)
      setLoading(false)
    }
    fetchNews()
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
