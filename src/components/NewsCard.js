import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ ...news }) => {
  return (
    <div key={news.index} className='col'>
      <div className='card h-100'>
        <div className='images-container'>
          <img
            src={news.urlToImage}
            className='card-img-top'
            alt={news.title}
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{news.title}</h5>
          <p className='card-text'>{news.description}</p>
        </div>
        <div className='card-body'>
          Source:{' '}
          <Link
            to={news.url}
            className='card-link'
            rel='noreferrer'
            target='_blank'
          >
            {news.source.name}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
