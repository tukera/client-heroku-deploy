import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NewsList from '../components/NewsList'
const API_URL = process.env.REACT_APP_API_URL

const NewsPage = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get(`${API_URL}/news/`)
      .then((res) => {
        setNews(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <section>
      <div className='container'>
        <h2 className='display-2 text-center mb-5'>
          Latest cryptocurrency news
        </h2>
        <div className='row row-cols-1 row-cols-md-3 g-4 mb-5'>
          <NewsList news={news} />
        </div>
      </div>
    </section>
  )
}

export default NewsPage
