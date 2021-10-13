import { useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from './../context/auth.context'

const API_URL = process.env.REACT_APP_API_URL

function LoginPage (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const { logInUser } = useContext(AuthContext)

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const requestBody = { email, password }

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        const token = response.data.authToken
        logInUser(token)
        props.history.push('/')
      })
      .catch((error) => {
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className='LoginPage container d-flex flex-column align-items-center'>
      <h2 className='my-5'>Login</h2>
      <div className='card w-25 p-3 mb-3'>
        <form
          onSubmit={handleLoginSubmit}
          className='d-flex flex-column align-items-center'
        >
          <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input
              type='text'
              name='email'
              value={email}
              className='form-control'
              placeholder='rockstar@ironhack.com'
              onChange={handleEmail}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              className='form-control'
              type='password'
              name='password'
              value={password}
              onChange={handlePassword}
            />
          </div>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </form>
        {errorMessage && (
          <div className='alert alert-danger' role='alert'>
            {errorMessage}
          </div>
        )}
      </div>
      <p>Don't have an account yet?</p>
      <Link to='auth/signup'> Sign Up</Link>
    </div>
  )
}

export default LoginPage
