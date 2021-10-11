import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          CryptoHack
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <ul className='nav'>
            <li className='nav-item'>
              <Link
                className='nav-link text-dark'
                aria-current='page'
                to='/news'
              >
                News
              </Link>
            </li>
            {isLoggedIn
              ? (
                <>
                  <li className='nav-item'>
                    <Link className='nav-link text-dark me-3' to='/user/:id'>
                      {user.name}
                    </Link>
                  </li>
                  <li>
                    <button onClick={logOutUser} className='btn btn-outline-danger'>
                      Logout
                    </button>
                  </li>
                </>
                )
              : (
                <>
                  <li className='nav-item'>
                    <Link className='nav-link text-dark' to='/signup'>
                      Signup
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link text-dark' to='/login'>
                      Login
                    </Link>
                  </li>
                </>
                )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
