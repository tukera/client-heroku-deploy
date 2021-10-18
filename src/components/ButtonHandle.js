import React from 'react'

const ButtonHandle = ({ handleSubmit, isDeleted, handleDelete }) => {
  return (
    <>
      {isDeleted ? (
        <button onClick={handleDelete} className='btn btn-danger btn-sm w-100'>
          <i className='fas fa-star' />
        </button>
      ) : (
        <button onClick={handleSubmit} className='btn btn-primary btn-sm w-100'>
          <i className='fas fa-star' />
        </button>
      )}
    </>
  )
}

export default ButtonHandle
