import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Google from '../../components/SocialLogin/Google'
import Facebook from '../../components/SocialLogin/Facebook'
import LoginForm from '../../components/Forms/LoginForm/LoginForm'

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

import { authActions } from '../App/auth/actions'

export const LoginPage = () => (
  <>
    <Helmet
      titleTemplate="Login"
      defaultTitle="Login"
    >
      <meta name="description" content="Login" />
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
                    <small>Sign in with</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Facebook />
                    <Google />
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                  </div>
                  <LoginForm />
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <Link className="text-light" to="/auth/register">
                    <small>Create new account</small>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  </>
)

const mapDispatchToProps = (dispatch) => ({
  socialLogin: (response, provider) => dispatch(authActions.socialLogin(response, provider))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
