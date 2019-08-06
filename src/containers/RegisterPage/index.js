import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm } from 'formik'
import validationSchema from './validationSchema'
import Google from '../../components/SocialLogin/Google'
import Facebook from '../../components/SocialLogin/Facebook'

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

import { authActions } from '../App/auth/actions'

const RegisterPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Register"
      defaultTitle="Register"
    >
      <meta name="description" content="Register" />
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
                    <small>Sign up with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Facebook />
                    <Google />
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign up with credentials</small>
                  </div>
                  <FormikForm>
                    <Form>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            // helperText={touched.name ? errors.name : ''}
                            // error={touched.name && Boolean(errors.name)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
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
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
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
                            // helperText={touched.password ? errors.password : ''}
                            // error={touched.password && Boolean(errors.password)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
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
                            // helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
                            // error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="!#"
                                  onClick={e => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </div>
)

const RegisterPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: ''
    }
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.register(values.email, values.name, values.password, values.passwordConfirm)
  }
})(RegisterPage)

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password, passwordConfirm) => dispatch(authActions.register(email, name, password, passwordConfirm)),
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
})

export default connect(undefined, mapDispatchToProps)(RegisterPageFormik)
