import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { snackbarReducer } from 'material-ui-snackbar-redux'

import globalReducer from 'store/global/reducer'
import authReducer from 'store/auth/reducer'
import trainingsReducer from 'store/trainings/reducer'
import trainingReducer from 'store/training/reducer'
import layoutReducer from 'store/layout/reducer'

import { jwt } from './middlewares/jwt'

/* eslint-disable no-underscore-dangle, indent */
const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

export default () => {
  const store = createStore(
    combineReducers({
      global: globalReducer,
      auth: authReducer,
      trainings: trainingsReducer,
      trainingData: trainingReducer,
      layout: layoutReducer,
      snackbar: snackbarReducer
    }),
    composeEnhancers(applyMiddleware(jwt, thunk))
  )

  return store
}
