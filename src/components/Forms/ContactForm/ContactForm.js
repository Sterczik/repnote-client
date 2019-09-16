import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm } from 'formik'
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

import { sendContactMessage } from '../../../containers/App/global/actions'

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <FormikForm>
    <Form>
      <FormGroup className="mt-5">
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Your name"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup className="mb-4">
        <Input
          className="form-control-alternative"
          cols="80"
          placeholder="Type a message..."
          rows="4"
          type="textarea"
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
      </FormGroup>
      <div>
        <Button
          block
          className="btn-round"
          color="default"
          size="lg"
          type="submit"
        >
          Send Message
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
})(ContactForm)

const mapDispatchToProps = (dispatch) => ({
  sendContactMessage: (message) => dispatch(sendContactMessage(message)),
})

export default connect(undefined, mapDispatchToProps)(ContactFormFormik)
