import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { authActions } from '../../containers/App/auth/actions';

const Google = (props) => (
  <GoogleLogin
    clientId="156518502870-pdubhnv4g7vasi3sjdjhkltt1t2s3nrs.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={(response) => props.socialLogin(response, 'google')}
    onFailure={(error) => console.log(error)}
  />
);

const mapDispatchToProps = (dispatch) => ({
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
});

export default connect(undefined, mapDispatchToProps)(Google);
