import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Google from 'components/SocialLogin/Google'
import Facebook from 'components/SocialLogin/Facebook'
import LoginForm from 'components/Forms/LoginForm/LoginForm'

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

export const LoginPage = ({ t }) => (
  <>
    <Helmet
      title={ t('views.loginpage.helmet.text') }
      meta={[
        {
          name: 'description',
          content: t('views.loginpage.helmet.text'),
        },
      ]}
    />
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-info"></div>
      <Container className="pt-lg-md">
        <Row className="justify-content-center">
          <Col lg="5">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-white pb-5">
                <div className="text-muted text-center mb-3">
                  <small>{ t('views.loginpage.signInSocial') }</small>
                </div>
                <div className="social-btn-wrapper text-center">
                  <Facebook />
                  <Google />
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>{ t('views.loginpage.signInEmail') }</small>
                </div>
                <LoginForm />
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <Link className="text-white" to="/auth/register">
                  <small>{ t('views.loginpage.signUp') }</small>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default withTranslation()(LoginPage)
