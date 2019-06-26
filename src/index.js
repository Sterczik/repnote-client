import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { SnackbarProvider } from 'material-ui-snackbar-redux'

import configureStore from './store/configureStore'
import { history } from './helpers/history'

import * as serviceWorker from './serviceWorker'

import 'typeface-roboto'

import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/scss/argon-design-system-react.scss'

import LandingLayout from './layouts/Landing'
import AuthLayout from './layouts/Auth'

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')
/* eslint-disable no-underscore-dangle, indent */
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <>
        <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500, anchorOrigin: { vertical: 'top', horizontal: 'right' } }} />
        <Switch>
          <Route path="/landing" render={props => <LandingLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
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
