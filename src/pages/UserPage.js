import { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { AuthContext } from './../context/auth.context'

const API_URL = process.env.REACT_APP_API_URL

function UserPage() {
  const { user, userData } = useContext(AuthContext)
  const [cryptocurrency, setCryptocurrency] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllCryptocurrency = () => {
    const storedToken = localStorage.getItem('authToken')

    axios({
      method: 'POST',
      url: `${API_URL}/user`,
      data: { user: user },
      headers: { Authorization: `Bearer ${storedToken}` }
    })
      .then((response) => {
        console.log(response)
        setCryptocurrency(response.data.cryptocurrency)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getAllCryptocurrency()
  }, [])

  // console.log('storedToken ====> ', storedToken)
  return (
    <div className='UserPage'>
      <h2>Welcome {user.name}</h2>
      <div className='row'>
        <div className='container'>
          {console.log('user', userData)}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  )
}

export default UserPage
