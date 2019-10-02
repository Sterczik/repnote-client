import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'
import ContactForm from '../../components/Forms/ContactForm/ContactForm'

export const ContactPage = () => (
  <>
    <Helmet
        titleTemplate="Contact Us"
        defaultTitle="Contact Us"
      >
        <meta name="description" content="Contact Us" />
    </Helmet>
    <div className="position-relative">
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default">
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
                  <h4 className="mb-1">Want to contact?</h4>
                  <p className="mt-0">
                    Your feedback is very important to us.
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

export default ContactPage
