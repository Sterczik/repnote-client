import React from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import {
  Button
} from "reactstrap"
import { authActions } from '../../containers/App/auth/actions'

const Google = (props) => (
  <GoogleLogin
    clientId="156518502870-pdubhnv4g7vasi3sjdjhkltt1t2s3nrs.apps.googleusercontent.com"
    render={renderProps => (
      <Button
        className="btn-neutral btn-icon ml-1"
        color="default"
        disabled={renderProps.disabled}
        onClick={renderProps.onClick}
      >
        <span className="btn-inner--icon mr-1">
          <img
            alt="..."
            src={require("../../assets/img/icons/common/google.svg")}
          />
        </span>
        <span className="btn-inner--text">Google</span>
      </Button>
    )}
    onSuccess={(response) => props.socialLogin(response, 'google')}
    onFailure={(error) => console.log(error)}
  />
)

const mapDispatchToProps = (dispatch) => ({
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
})

export default connect(undefined, mapDispatchToProps)(Google)
