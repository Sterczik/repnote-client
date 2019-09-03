import React from 'react'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm } from 'formik'
import validationSchema from './validationSchema'

import {
  Form,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap'

import { sendContactMessage } from '../../../containers/App/global/actions'

const ContactForm = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <section className="section section-lg pt-lg-0 section-contact-us">
    <Container>
      <Row className="justify-content-center mt--300">
        <Col lg="8">
          <Card className="bg-gradient-secondary shadow">
            <CardBody className="p-lg-5">
              <h4 className="mb-1">Want to contact?</h4>
              <p className="mt-0">
                Your feedback is very important to us.
              </p>
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
                      type="button"
                    >
                      Send Message
                    </Button>
                  </div>
                </Form>
              </FormikForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
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
