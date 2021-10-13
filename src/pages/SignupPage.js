import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

function SignupPage (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState(undefined)

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleName = (e) => setName(e.target.value)

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    // Create an object representing the request body
    const requestBody = { email, password, name }

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => props.history.push('/login'))
      .catch((error) => {
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }

  return (
    <div className='SignupPage container d-flex flex-column align-items-center'>
      <h2 className='my-5'>Create account</h2>
      <div className='card w-25 p-3 mb-3'>
        <form
          className='d-flex flex-column align-items-center'
          onSubmit={handleSignupSubmit}
        >
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Username
            </label>
            <input
              type='text'
              name='name'
              value={name}
              className='form-control'
              onChange={handleName}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              value={email}
              className='form-control'
              onChange={handleEmail}
            />
          </div>
          <div className='mb-3'>
            <label for='exampleFormControlInput1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={password}
              className='form-control'
              onChange={handlePassword}
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Create account
          </button>
          {errorMessage && (
            <div className='alert alert-danger' role='alert'>
              {errorMessage}
            </div>
          )}
        </form>
      </div>
      <p>Already have account?</p>
      <Link to='/login'> Login</Link>
    </div>
  )
}

export default SignupPage
