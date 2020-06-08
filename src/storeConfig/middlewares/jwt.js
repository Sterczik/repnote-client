import jwtDecode from 'jwt-decode'
import moment from 'moment'
import { authActions } from 'store/auth/actions'

export function jwt({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      if (getState().auth && getState().auth.user && getState().auth.user.accessToken) {
        const tokenExpiration = jwtDecode(getState().auth.user.accessToken).exp
        const refreshToken = getState().auth.user.refreshToken
        if (tokenExpiration && ((moment(tokenExpiration * 1000)) - moment(Date.now()) < 5000)) {
          if (!getState().auth.freshTokenPromise) {
            return authActions.refreshToken(dispatch, refreshToken).then(() => next(action))
          } else {
            return getState().auth.freshTokenPromise.then(() => next(action))
          }
        }
      }
    }
    return next(action)
  }
}
