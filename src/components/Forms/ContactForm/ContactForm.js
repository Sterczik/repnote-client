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

import { sendContactMessage } from 'store/global/actions'

const ContactForm = ({
  values,
  handleChange,
  t
}) => (
  <FormikForm>
    <Form>
      <FormGroup className="mt-5">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-user-circle" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder={ t('components.forms.contact.name') }
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
            placeholder={ t('components.forms.contact.email') }
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
      <FormGroup className="mb-4">
        <Input
          className="form-control-alternative"
          cols="80"
          placeholder={ t('components.forms.contact.textarea') }
          rows="4"
          type="textarea"
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        <div className="formik-invalid-feedback">
          <ErrorMessage name="message" />
        </div>
      </FormGroup>
      <div>
        <Button
          block
          className="btn-round"
          color="default"
          size="lg"
          type="submit"
        >
          { t('components.forms.contact.submit') }
        </Button>
      </div>
    </Form>
  </FormikForm>
)

const ContactFormFormik = withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  validationSchema,
  handleSubmit({ name, email, message }, { props }) {
    props.sendContactMessage({
      name,
      email,
      message
    })
  }
})(withTranslation()(ContactForm))

const mapDispatchToProps = (dispatch) => ({
  sendContactMessage: (message) => dispatch(sendContactMessage(message)),
})

export default connect(undefined, mapDispatchToProps)(ContactFormFormik)
