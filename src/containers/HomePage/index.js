import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
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
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
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
                        Donec convallis urna placerat sem facilisis vestibulum. Nulla sodales eu nibh eget varius. Quisque quis accumsan dui. Nunc ut sapien dui.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          to="/auth/register"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-badge" />
                          </span>
                          <span className="btn-inner--text">Start now</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          to="/landing/about"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-caret-down" />
                          </span>
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
          
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Lorem ipsum
                          </h6>
                          <p className="description mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum fringilla dolor a pharetra. Pellentesque ut eros eget ex efficitur laoreet ac lobortis dolor.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              lorem
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              ipsum
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              dolor
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="!#"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Lorem ipsum
                          </h6>
                          <p className="description mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum fringilla dolor a pharetra. Pellentesque ut eros eget ex efficitur laoreet ac lobortis dolor.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              lorem
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              ipsum
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              dolor
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="!#"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Lorem ipsum
                          </h6>
                          <p className="description mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum fringilla dolor a pharetra. Pellentesque ut eros eget ex efficitur laoreet ac lobortis dolor.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              lorem
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              ipsum
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              dolor
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="!#"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      Nulla id felis vitae libero molestie vulputate. Donec aliquam orci velit, sed lacinia dolor mollis quis. Quisque sed metus id nibh auctor cursus.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Lorem ipsum dolor
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Lorem ipsum dolor
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Lorem ipsum dolor
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <h4 className="display-3 font-weight-bold text-white">
                        Trainings System
                      </h4>
                      <p className="lead text-italic text-white">
                        Nulla id felis vitae libero molestie vulputate. Donec aliquam orci velit, sed lacinia dolor mollis quis. Quisque sed metus id nibh auctor cursus.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris. Duis aliquet semper dignissim.
                    </p>
                    <p>
                      Vivamus id orci eu augue convallis lacinia ut in erat. Morbi blandit pellentesque est, eu blandit dolor viverra sit amet. Morbi porttitor semper iaculis.
                    </p>
                    <p>
                      Nam dapibus placerat finibus. Fusce dignissim vehicula nisi. Sed id suscipit velit, non mattis purus. Suspendisse at erat purus.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
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
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            Integer sagittis enim eu nulla dignissim dapibus. Nullam in dapibus lorem.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <a
                            className="text-success"
                            href="!#"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Awesome Support
                          </h5>
                          <p>
                            Integer sagittis enim eu nulla dignissim dapibus. Nullam in dapibus lorem.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <a
                            className="text-warning"
                            href="!#"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
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
                  <h2 className="display-3 text-white">Favourites exercises</h2>
                  <p className="lead text-white">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris. Duis aliquet semper dignissim. Vivamus id orci eu augue convallis lacinia ut in erat.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Nice support</h5>
                  <p className="text-white mt-3">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Many creators</h5>
                  <p className="text-white mt-3">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Friendly UI</h5>
                  <p className="text-white mt-3">
                    Maecenas fringilla, augue nec euismod venenatis, erat risus eleifend augue, eget venenatis nunc risus quis mauris.
                  </p>
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
