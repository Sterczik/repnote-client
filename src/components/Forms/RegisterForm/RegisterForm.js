import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
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

const RegisterForm = ({
  values,
  handleChange,
  t
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
            placeholder={ t('components.forms.signUp.name') }
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
            placeholder={ t('components.forms.signUp.email') }
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
            placeholder={ t('components.forms.signUp.password') }
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
            placeholder={ t('components.forms.signUp.password2') }
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
      <div className="text-center">
        <Button
          className="mt-4"
          color="primary"
          type="submit"
        >
          { t('components.forms.signUp.submit') }
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
})(withTranslation()(RegisterForm))

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password, passwordConfirm) => dispatch(authActions.register(email, name, password, passwordConfirm))
})

export default connect(undefined, mapDispatchToProps)(RegisterFormFormik)
