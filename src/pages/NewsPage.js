import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NewsCard from '../components/NewsCard'

function NewsPage() {
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
    <section className='NewsPage container'>
      <h2 className='display-2 text-center mb-5'>Latest cryptocurrency news</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4 mb-5'>
        {loading && <div>Loading...</div>}
        {!loading &&
          news?.map((article, index) => <NewsCard key={index} {...article} />)}
      </div>
    </section>
  )
}

export default NewsPage
