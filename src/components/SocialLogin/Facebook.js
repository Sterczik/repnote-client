import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { authActions } from '../../containers/App/auth/actions';

const Facebook = (props) => (
  <FacebookLogin
    appId="300111870657527"
    fields="name,email,picture"
    callback={(response) => props.socialLogin(response, 'facebook')}
  />
);

const mapDispatchToProps = (dispatch) => ({
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
});

export default connect(undefined, mapDispatchToProps)(Facebook);
