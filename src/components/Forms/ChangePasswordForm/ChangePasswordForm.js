import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm, ErrorMessage } from 'formik'
import validationSchema from './validationSchema'

import {
  Form,
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from 'reactstrap'

import { authActions } from '../../../containers/App/auth/actions'

const ChangePasswordForm = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <FormikForm>
    <Form>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Old password"
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={values.oldPassword}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="oldPassword" />
        </div>
      </FormGroup>
      <FormGroup className="mb-3">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="New password"
            type="password"
            id="newPassword"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="newPassword" />
        </div>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="New password"
            type="password"
            id="newPasswordConfirm"
            name="newPasswordConfirm"
            value={values.newPasswordConfirm}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="newPasswordConfirm" />
        </div>
      </FormGroup>
      <div className="text-center">
        <Button
          className="my-4"
          color="primary"
          type="submit"
        >
          Sign in
        </Button>
      </div>
    </Form>
  </FormikForm>
)

const ChangePasswordFormFormik = withFormik({
  mapPropsToValues() {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.changePassword(values.oldPassword, values.newPassword, values.newPasswordConfirm)
  }
})(ChangePasswordForm)

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword, newPasswordConfirm) => dispatch(authActions.changePassword(oldPassword, newPassword, newPasswordConfirm))
})

export default connect(undefined, mapDispatchToProps)(ChangePasswordFormFormik)
