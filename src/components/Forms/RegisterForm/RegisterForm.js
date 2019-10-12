import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'
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

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <FormikForm>
    <Form>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-user-circle" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="name" />
        </div>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="email" />
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
            placeholder="Password"
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="password" />
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
            placeholder="Password Confirmation"
            type="password"
            autoComplete="off"
            id="passwordConfirm"
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="passwordConfirm" />
        </div>
      </FormGroup>
      <FormGroup className="my-4">
        <InputGroup className="custom-control custom-control-alternative custom-checkbox">
          <Input
            className="custom-control-input"
            type="checkbox"
            id="privacy"
            name="privacy"
            value={values.privacy}
            onChange={handleChange}
          />
          <label
            className="custom-control-label"
            htmlFor="privacy"
          >
            <span>
              I agree with the{" "}
              <Link
                to="/landing/privacy-policy"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </InputGroup>
        <div className="formik-invalid-feedback">
          <ErrorMessage name="privacy" />
        </div>
      </FormGroup>
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="submit"
        >
          Create account
        </Button>
      </div>
    </Form>
  </FormikForm>
)

const RegisterFormFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      privacy: false
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.register(values.email, values.name, values.password, values.passwordConfirm)
  }
})(RegisterForm)

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password, passwordConfirm) => dispatch(authActions.register(email, name, password, passwordConfirm))
})

export default connect(undefined, mapDispatchToProps)(RegisterFormFormik)
