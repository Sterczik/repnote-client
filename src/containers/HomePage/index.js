import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

import ContactForm from 'components/Forms/ContactForm/ContactForm'

class HomePage extends Component {
  render() {
    const { t } = this.props
    const helmetContent = t('views.homepage.helmet.text')
    return (
      <>
        <Helmet
          title={ helmetContent }
          meta={[
            {
              name: 'description',
              content: helmetContent,
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
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      { t('views.homepage.mainHeadline1') }{" "}
                      <span>{ t('views.homepage.mainHeadline2') }</span>
                    </h1>
                    <p className="lead text-white">
                      { t('views.homepage.text') }
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="default"
                        to="/auth/register"
                        tag={Link}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-check" />
                        </span>
                        <span className="btn-inner--text">{ t('views.homepage.init') }</span>
                      </Button>
                      <Button
                        className="btn-white mb-3 mb-sm-0 ml-1"
                        color="default"
                        to="/landing/contact"
                        tag={Link}
                      >
                        <span className="btn-inner--text">{ t('views.homepage.contact') }</span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>

        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-lg-1" lg="8">
                <div className="pr-lg-5">
                  <h3>{ t('views.homepage.features.headline') }</h3>
                  <p className="lead">{ t('views.homepage.features.text') }</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg bg-gradient-default">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col>
                <h2 className="display-3 text-white">{ t('views.homepage.favourites.headline') }</h2>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col md="4" className="text-center">
                <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">{ t('views.homepage.favourites.icon1') }</h5>
              </Col>
              <Col md="4" className="text-center">
                <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">{ t('views.homepage.favourites.icon2') }</h5>
              </Col>
              <Col md="4" className="text-center">
                <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">{ t('views.homepage.favourites.icon3') }</h5>
              </Col>
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>

        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">{ t('views.homepage.contactForm.headline') }</h4>
                    <p className="mt-0">
                      { t('views.homepage.contactForm.text') }
                    </p>
                    <ContactForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    )
  }
}

export default withTranslation()(HomePage)
