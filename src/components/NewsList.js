import React from 'react'

const NewsList = ({ news }) => {
  return (
    <>
      {news?.map((article, index) => (
        <div key={index} className='col'>
          <div className='card h-100'>
            <div className='images-container'>
              <img
                src={article.urlToImage}
                className='card-img-top'
                alt={article.title}
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{article.title}title</h5>
              <p className='card-text'>{article.description}</p>
            </div>
            <div className='card-body'>
              <a
                className='card-link'
                rel='noreferrer'
                target='_blank'
                href={article.url}
              >
                {article.source.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default NewsList
