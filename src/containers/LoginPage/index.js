import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import validationSchema from './validationSchema';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import {
  StyledHero,
  HeroGhost
} from '../../assets/styles/components/Hero/hero';
import {
  StyledForm,
  FormButtons
} from '../../assets/styles/components/Form/form';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const LoginPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Login"
      defaultTitle="Login"
    >
      <meta name="description" content="Login" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost>
          <PageHeading title="Login" />
          <StyledForm>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange}
              margin="normal"
              fullWidth
              helperText={touched.email ? errors.email : ''}
              error={touched.email && Boolean(errors.email)}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              margin="normal"
              fullWidth
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
            />
            <FormButtons>
              <Button type="submit" color="secondary">Login</Button>
              <Link to="/forgot-password">
                Forgot password
              </Link>
            </FormButtons>
          </StyledForm>
          <div>
            <PageHeading subtitle="You have no account?" />
            <Typography variant="subheading" color="primary" className="text-center">
              <Link to="/register">
                Register
              </Link>
            </Typography>
          </div>
          <GoogleLogin
            clientId="156518502870-pdubhnv4g7vasi3sjdjhkltt1t2s3nrs.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={(response) => this.socialLogin(response)}
            onFailure={(error) => console.log(error)}
          />
          <FacebookLogin
            appId="300111870657527"
            // autoLoad={true}
            fields="name,email,picture"
            callback={(response) => this.socialLogin(response)} />
        </HeroGhost>
      </Container>
    </StyledHero>
  </div>
);

const LoginPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.login(values.email, values.password);
  }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(authActions.login(email, password)),
  socialLogin: (response) => dispatch(authActions.login(response))
});

export default connect(undefined, mapDispatchToProps)(LoginPageFormik);
