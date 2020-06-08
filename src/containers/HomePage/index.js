import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

import ContactForm from 'components/Forms/ContactForm/ContactForm'

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
          <Helmet
            titleTemplate="RepNote - Create your trainings"
            defaultTitle="RepNote - Create your trainings"
          >
            <meta name="description" content="RepNote - Create your trainings" />
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Create your trainings{" "}
                        <span>share with people</span>
                      </h1>
                      <p className="lead text-white">
                        With RepNote, you can create your unique trainings for yourself, or share them with other people.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          to="/auth/register"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-check" />
                          </span>
                          <span className="btn-inner--text">Start now</span>
                        </Button>
                        <Button
                          className="btn-white mb-3 mb-sm-0 ml-1"
                          color="default"
                          to="/landing/contact"
                          tag={Link}
                        >
                          <span className="btn-inner--text">
                            Contact
                          </span>
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
                    <h3>Great features</h3>
                    <p className="lead">
                      RepNote comes with bunch of features which will help you create your best trainings.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-users text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Community</h4>
                      <p className="text-white">
                        Check out trainings created by RepNote users,
                      </p>
                    </div>
                  </div>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-edit text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Creativity</h4>
                      <p className="text-white">
                        or create training for others by yourself.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-sm">
                <Col lg="8">
                  <h2 className="display-3">Support</h2>
                  <p className="lead text-muted">
                    Text
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col>
                  <h2 className="display-3 text-white">Favourites trainings</h2>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col md="4" className="text-center">
                  <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Support</h5>
                </Col>
                <Col md="4" className="text-center">
                  <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Customization</h5>
                </Col>
                <Col md="4" className="text-center">
                  <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Friendly UI</h5>
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
        </main>
      </>
    )
  }
}

export default HomePage
