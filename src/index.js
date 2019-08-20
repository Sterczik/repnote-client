import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { SnackbarProvider } from 'material-ui-snackbar-redux'

import configureStore from './store/configureStore'
import { history } from './helpers/history'

import * as serviceWorker from './serviceWorker'

// Styles
import 'typeface-roboto'
import './assets/vendor/nucleo/css/nucleo.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/scss/argon-design-system-react.scss'

// Layouts
import LandingLayout from './layouts/Landing'
import AuthLayout from './layouts/Auth'
import AccountLayout from './layouts/Account'
import TrainingsLayout from './layouts/Trainings'

// Action creators
import { getTrainingCategories, getExerciseCategories } from './containers/App/global/actions'

const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root')
/* eslint-disable no-underscore-dangle, indent */
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

// Dispatch action creators
store.dispatch(getTrainingCategories())
store.dispatch(getExerciseCategories())

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
