import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import UserPage from './pages/UserPage'
import CurrencyPage from './pages/CurrencyPage'
import ProjectListPage from './pages/ProjectListPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import EditProjectPage from './pages/EditProjectPage'

import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import AnonRoute from './components/AnonRoute'

function App () {
  return (
    <div className='App'>
      <Route component={Navbar} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/news' component={NewsPage} />

        {/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
        <PrivateRoute exact path='/projects' component={ProjectListPage} />
        <PrivateRoute exact path='/cryptocurrency' component={CurrencyPage} />
        <PrivateRoute exact path='/user' component={UserPage} />
        <PrivateRoute
          exact
          path='/projects/:id'
          component={ProjectDetailsPage}
        />
        <PrivateRoute
          exact
          path='/projects/edit/:id'
          component={EditProjectPage}
        />

        <AnonRoute exact path='/signup' component={SignupPage} />
        <AnonRoute exact path='/login' component={LoginPage} />
      </Switch>
    </div>
  )
}

export default App
