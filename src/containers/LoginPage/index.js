import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import validationSchema from './validationSchema';
import Google from '../../components/SocialLogin/Google';
import Facebook from '../../components/SocialLogin/Facebook';

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
          <div>
            <Google />
          </div>
          <div>
            <Facebook />
          </div>
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
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPageFormik);
