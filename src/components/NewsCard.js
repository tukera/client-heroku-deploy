import React from 'react'
import { Link } from 'react-router-dom'

const NewsCard = ({ ...news }) => {
  return (
    <div key={news.id} className='col'>
      <div className='card h-100'>
        <div className='images-container'>
          <img src={news.image} className='card-img-top' alt={news.title} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{news.title}</h5>
          {news.author ? (
            <p className='card-text'>Author: {news.author}</p>
          ) : (
            ''
          )}
          <p className='card-text'>{news.description}</p>
        </div>
        <div className='card-body'>
          Source:{' '}
          <a
            href={news.url}
            className='card-link'
            rel='noreferrer'
            target='_blank'
          >
            {news.source_name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
