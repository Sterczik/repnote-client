import React from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'
import ContactForm from 'components/Forms/ContactForm/ContactForm'

export const ContactPage = ({ t }) => (
  <>
    <Helmet
      title={ t('views.contactpage.helmet.text') }
      meta={[
        {
          name: 'description',
          content: t('views.contactpage.helmet.text'),
        },
      ]}
    />
    <div className="position-relative">
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 bg-gradient-info">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="py-lg-md">
          <Row className="justify-content-center">
            <Col lg="8">
              <Card>
                <CardBody className="p-lg-5">
                  <h4 className="mb-1">{ t('views.contactpage.contactForm.headline') }</h4>
                  <p className="mt-0">
                    { t('views.contactpage.contactForm.text') }
                  </p>
                  <ContactForm />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  </>
)

export default withTranslation()(ContactPage)
