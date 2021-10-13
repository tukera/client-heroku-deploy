import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'

import Navbar from './components/Navbar'
import AnonRoute from './components/AnonRoute'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App'>
        <Navbar />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <AnonRoute exact path='/login' component={LoginPage} />
            <AnonRoute exact path='/signup' component={SignupPage} />
            <Route exact path='/news' component={NewsPage} />
          </Switch>
        </main>
      </div>
    </Suspense>
  )
}

export default App
