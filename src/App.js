import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import CoinDetailPage from './pages/CoinDetailPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

import Navbar from './components/Navbar'
import Table from './components/Table'
import AnonRoute from './components/AnonRoute'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <section>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Table />
            </Route>
            <Route path='/coins/:id' component={CoinDetailPage} />
            <AnonRoute exact path='/signup' component={SignupPage} />
            <AnonRoute exact path='/login' component={LoginPage} />
          </Switch>
        </div>
      </section>
    </div>
  )
}

export default App
