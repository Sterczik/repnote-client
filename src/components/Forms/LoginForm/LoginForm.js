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

import { authActions } from 'store/auth/actions'

const LoginForm = ({
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
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="submit"
        >
          Sign in
        </Button>
      </div>
    </Form>
  </FormikForm>
)

const LoginFormFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.login(values.email, values.password)
  }
})(LoginForm)

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(authActions.login(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginFormFormik)
