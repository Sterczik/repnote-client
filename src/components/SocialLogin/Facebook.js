import React from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {
  Button
} from "reactstrap"
import { authActions } from 'store/auth/actions'

const Facebook = (props) => (
  <FacebookLogin
    appId="300111870657527"
    fields="name,email,picture"
    callback={(response) => props.socialLogin(response, 'facebook')}
    render={renderProps => (
      <Button
        className="btn-neutral btn-icon"
        color="default"
        onClick={renderProps.onClick}
      >
        <span className="btn-inner--icon mr-1">
          <i className="fa fa-facebook" />
        </span>
        <span className="btn-inner--text">Facebook</span>
      </Button>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
})

export default connect(undefined, mapDispatchToProps)(Facebook)
