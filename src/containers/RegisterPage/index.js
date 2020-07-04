import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Google from 'components/SocialLogin/Google'
import Facebook from 'components/SocialLogin/Facebook'
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm'

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

export const RegisterPage = () => (
  <>
    <Helmet
      titleTemplate="Register"
      defaultTitle="Register"
    >
      <meta name="description" content="Register" />
    </Helmet>
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-info"></div>
      <Container className="pt-lg-md">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>Sign up with</small>
                </div>
                <div className="social-btn-wrapper text-center">
                  <Facebook />
                  <Google />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                </div>
                <RegisterForm />
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <Link className="text-white" to="/auth/login">
                  <small>Sign in</small>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default RegisterPage
