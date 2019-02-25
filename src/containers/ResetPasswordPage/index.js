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
  FormButtons
} from '../../assets/styles/components/Form/form';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ResetPasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Reset Password"
      defaultTitle="Reset Password"
    >
      <meta name="description" content="Reset Password" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost>
          <PageHeading title="Reset Password" />
          <StyledForm>
            <TextField
              id="newPassword"
              name="newPassword"
              label="New Password"
              type="password"
              value={values.newPassword}
              onChange={handleChange}
              margin="normal"
              fullWidth
              helperText={touched.newPassword ? errors.newPassword : ''}
              error={touched.newPassword && Boolean(errors.newPassword)}
            />
            <TextField
              id="newPasswordConfirm"
              name="newPasswordConfirm"
              label="Confirm New Password"
              type="password"
              value={values.newPasswordConfirm}
              onChange={handleChange}
              margin="normal"
              fullWidth
              helperText={touched.newPasswordConfirm ? errors.newPasswordConfirm : ''}
              error={touched.newPasswordConfirm && Boolean(errors.newPasswordConfirm)}
            />
            <FormButtons>
              <Button type="submit" color="secondary">Submit</Button>
            </FormButtons>
          </StyledForm>
        </HeroGhost>
      </Container>
    </StyledHero>
  </div>
);

const ResetPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      newPassword: '',
      newPasswordConfirm: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.resetPassword(values.newPassword, values.newPasswordConfirm);
  }
})(ResetPasswordPage);

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (newPassword, newPasswordConfirm) => dispatch(authActions.resetPassword(newPassword, newPasswordConfirm))
});

export default connect(undefined, mapDispatchToProps)(ResetPasswordPageFormik);
