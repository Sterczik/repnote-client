import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

export const NotFoundPage = ({ t }) => (
  <>
    <Helmet
        titleTemplate="Page not found"
        defaultTitle="Page not found"
      >
        <meta name="description" content="Page not found" />
    </Helmet>
    <div className="position-relative">
      <section className="section section-shaped section-lg">
      <div className="shape shape-style-1 bg-gradient-info"></div>
        <Container className="py-lg-lg">
            <Row className="justify-content-center">
              <Col lg="6">
                <h1 className="display-3 text-white">
                  404{" "}
                  <span>{ t('views.notfoundpage.headline') }</span>
                </h1>
                <div className="btn-wrapper py-4">
                  <Button
                    className="btn-white mb-3 mb-sm-0 ml-1"
                    color="default"
                    to="/landing"
                    tag={Link}
                  >
                    <span className="btn-inner--text">
                      { t('views.notfoundpage.back') }
                    </span>
                  </Button>
                  <Button
                    className="btn-white mb-3 mb-sm-0 ml-1"
                    color="default"
                    to="/landing/contact"
                    tag={Link}
                  >
                    <span className="btn-inner--text">
                      { t('global.buttons.contact') }
                    </span>
                  </Button>
                </div>
              </Col>
            </Row>
        </Container>
      </section>
    </div>
  </>
)

export default withTranslation()(NotFoundPage)
