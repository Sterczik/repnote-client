import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { SnackbarProvider } from 'material-ui-snackbar-redux'

import configureStore from 'storeConfig/configureStore'
import { history } from 'helpers/history'

import * as serviceWorker from 'serviceWorker'

import './i18n'

// Styles
import 'assets/vendor/nucleo/css/nucleo.css'
import 'assets/vendor/font-awesome/css/font-awesome.min.css'
import 'assets/scss/argon-design-system-react.scss'

// Layouts
import LandingLayout from 'layouts/Landing'
import AuthLayout from 'layouts/Auth'
import AccountLayout from 'layouts/Account'
import TrainingsLayout from 'layouts/Trainings'
import UsersLayout from 'layouts/Users'

import Dispatch from 'dispatch'

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')

// Dispatch action creators
Dispatch(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <>
        <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500, anchorOrigin: { vertical: 'top', horizontal: 'right' } }} />
        <Switch>
          <Route path="/landing" render={props => <LandingLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/account" render={props => <AccountLayout {...props} />} />
          <Route path="/trainings" render={props => <TrainingsLayout {...props} />} />
          <Route path="/users" render={props => <UsersLayout {...props} />} />
          <Redirect from="/" to="/landing" />
        </Switch>
      </>
    </Router>
  </Provider>,
  MOUNT_NODE,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
