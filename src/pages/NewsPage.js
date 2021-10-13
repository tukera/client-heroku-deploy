import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import NewsApi from '../services/News.handler'

import NewsList from '../components/NewsList'
// const API_URL = process.env.REACT_APP_API_URL

const NewsPage = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything?apiKey=883eb66584f04c30a3b6df5b370d31ea&q=cryptocurrencies')
      .then((res) => {
        setNews(res.data.articles)
      })
      .catch((error) => console.log(error))
  }, [])

  // useEffect(() => {
  //   const Api = new NewsApi()

  //   Api.getAllNews()
  //     .then((res) => {
  //       setNews(res.data)
  //     })
  //     .catch((error) => console.error(error))
  // }, [])

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
