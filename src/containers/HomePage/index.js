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

import ContactForm from '../../components/Forms/ContactForm/ContactForm'

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
                          to="/landing/about"
                          tag={Link}
                        >
                          <span className="btn-inner--text">
                            Read more
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
                <Col className="order-md-1" md="8">
                  <div className="pr-md-5">
                    <h3>Great features</h3>
                    <p className="lead">
                      Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue.
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
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        Nulla egestas ultricies nisl, vitae suscipit justo feugiat sed.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        Nulla egestas ultricies nisl, vitae suscipit justo feugiat sed.
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
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris. Duis aliquet semper dignissim. Vivamus id orci eu augue convallis lacinia ut in erat. Morbi blandit pellentesque est, eu blandit dolor viverra sit amet.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Favourites trainings</h2>
                  <p className="lead text-white">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris. Duis aliquet semper dignissim. Vivamus id orci eu augue convallis lacinia ut in erat.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Support</h5>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Customization</h5>
                </Col>
                <Col lg="4" className="text-center">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
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
