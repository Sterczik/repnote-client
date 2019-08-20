import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { snackbarReducer } from 'material-ui-snackbar-redux'

import globalReducer from '../containers/App/global/reducer'
import authReducer from '../containers/App/auth/reducer'
import trainingsReducer from '../containers/App/trainings/reducer'
import trainingReducer from '../containers/App/training/reducer'
import layoutReducer from '../containers/App/layout/reducer'

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
      training: trainingReducer,
      layout: layoutReducer,
      snackbar: snackbarReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
