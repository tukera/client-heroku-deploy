import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CoinDetailPage from './pages/CoinDetailPage'
import UserDetailPage from './pages/UserDetailPage'
import NewsPage from './pages/NewsPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

import Navbar from './components/Navbar'
import AnonRoute from './components/AnonRoute'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/coins/:id' component={CoinDetailPage} />
          <Route exact path='/user/:id' component={UserDetailPage} />
          <Route exact path='/news' component={NewsPage} />
          <AnonRoute exact path='/signup' component={SignupPage} />
          <AnonRoute exact path='/login' component={LoginPage} />
          <AnonRoute exact path='/logout' component={LoginPage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
