import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { withFormik, Form as FormikForm } from 'formik'
import validationSchema from './validationSchema'

import {
  Button,
  Card,
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

const ChangePasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <>
    <Helmet
      titleTemplate="Change Password Page"
      defaultTitle="Change Password Page"
    >
      <meta name="description" content="Change Password Page" />
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
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Change password</small>
                  </div>
                  <div className="text-center text-muted mb-4">
                    <small>You can change your password only when you registered via email. If you registered via Google or Facebook you can't change your password. You can check your provider in your account information</small>
                  </div>
                  <FormikForm>
                    <Form>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Old password"
                            type="password"
                            id="oldPassword"
                            name="oldPassword"
                            value={values.oldPassword}
                            onChange={handleChange}
                            // helperText={touched.oldPassword ? errors.oldPassword : ''}
                            // error={touched.oldPassword && Boolean(errors.oldPassword)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="New password"
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={values.newPassword}
                            onChange={handleChange}
                            // helperText={touched.newPassword ? errors.newPassword : ''}
                            // error={touched.newPassword && Boolean(errors.newPassword)}
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
                            placeholder="New password"
                            type="password"
                            id="newPasswordConfirm"
                            name="newPasswordConfirm"
                            value={values.newPasswordConfirm}
                            onChange={handleChange}
                            // helperText={touched.newPasswordConfirm ? errors.newPasswordConfirm : ''}
                            // error={touched.newPasswordConfirm && Boolean(errors.newPasswordConfirm)}
                          />
                        </InputGroup>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </>
)

const ChangePasswordPageFormik = withFormik({
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
})(ChangePasswordPage)

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword, newPasswordConfirm) => dispatch(authActions.changePassword(oldPassword, newPassword, newPasswordConfirm))
})

export default connect(undefined, mapDispatchToProps)(ChangePasswordPageFormik)
