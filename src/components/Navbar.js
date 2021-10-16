import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './../context/auth.context'

function Navbar (props) {
  console.log('PROPS', props)
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <nav>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/news'>
        <button>News</button>
      </Link>
      -
      {isLoggedIn ? (
        <>
          <Link to='/projects'>
            <button>Projects</button>
          </Link>
          <Link to='/cryptocurrency'>
            <button>Cryptocurrency</button>
          </Link>
          <Link to='/user'>
            <button>{user.name}</button>
          </Link>
          <button onClick={logOutUser}>Logout</button>
        </>
      ) : (
        <>
          <Link to='/signup'>
            {' '}
            <button>Signup</button>{' '}
          </Link>
          <Link to='/login'>
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
