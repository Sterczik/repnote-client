import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
      )
    )}
  />
)

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn
})

export default connect(mapStateToProps)(PrivateRoute)
