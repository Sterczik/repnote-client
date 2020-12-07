import React from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import ChangePasswordForm from 'components/Forms/ChangePasswordForm/ChangePasswordForm'

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

export const ChangePasswordPage = ({ t }) => (
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
                  <small>{ t('views.changepasswordpage.headline') }</small>
                </div>
                <div className="text-center text-muted mb-4">
                  <small>{ t('views.changepasswordpage.text') }</small>
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

export default withTranslation()(ChangePasswordPage)
