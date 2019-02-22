import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema';

import {
  StyledHero,
  HeroGhost
} from '../../assets/styles/components/Hero/hero';
import {
  StyledForm,
} from '../../assets/styles/components/Form/form';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ForgotPasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Forgot Password"
      defaultTitle="Forgot Password"
    >
      <meta name="description" content="Forgot Password" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost>
          <PageHeading title="Forgot Password" />
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
            <div>
              <Button type="submit" color="secondary">Submit</Button>
            </div>
          </StyledForm>
        </HeroGhost>
      </Container>
    </StyledHero>
  </div>
);

const ForgotPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.forgotPassword(values.email);
  }
})(ForgotPasswordPage);

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (email) => dispatch(authActions.forgotPassword(email))
});

export default connect(undefined, mapDispatchToProps)(ForgotPasswordPageFormik);
