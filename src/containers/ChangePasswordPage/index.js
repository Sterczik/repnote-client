import React from 'react'
import { Helmet } from 'react-helmet'
import ChangePasswordForm from 'components/Forms/ChangePasswordForm/ChangePasswordForm'

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

export const ChangePasswordPage = () => (
  <>
    <Helmet
      titleTemplate="Change Password"
      defaultTitle="Change Password"
    >
      <meta name="description" content="Change Password" />
    </Helmet>
    <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-info"></div>
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
                <ChangePasswordForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default ChangePasswordPage
