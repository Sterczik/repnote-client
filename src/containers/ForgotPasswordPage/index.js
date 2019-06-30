import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm } from 'formik'
import validationSchema from './validationSchema'
import { authActions } from '../App/auth/actions'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap'

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
    <main>
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="pt-lg-md">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <small>Forgot password</small>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Pass your email</small>
                  </div>
                  <FormikForm>
                    <Form>
                      <FormGroup className="mb-3">
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
                            // helperText={touched.email ? errors.email : ''}
                            // error={touched.email && Boolean(errors.email)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <div className="text-center">
                        <Button
                          className="my-4"
                          color="primary"
                          type="submit"
                        >
                          Submit
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
    </main>
  </div>
)

const ForgotPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.forgotPassword(values.email)
  }
})(ForgotPasswordPage)

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (email) => dispatch(authActions.forgotPassword(email))
})

export default connect(undefined, mapDispatchToProps)(ForgotPasswordPageFormik)
