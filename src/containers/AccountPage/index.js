import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { authActions } from '../App/auth/actions'

export class AccountPage extends React.Component {
  componentDidMount() {
    this.props.getProfile()
  }
  render() {
    return (
      <>
        <Helmet
          titleTemplate="My Account"
          defaultTitle="My Account"
        >
          <meta name="description" content="My Account" />
        </Helmet>
        <main className="profile-page">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                { this.props.userInfo ? (
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                          <a href="!#" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="rounded-circle"
                              src={require("../../assets/img/theme/team-4-800x800.jpg")}
                            />
                          </a>
                        </div>
                      </Col>
                      <Col
                        className="order-lg-3 text-lg-right align-self-lg-center"
                        lg="4"
                      >
                        <div className="card-profile-actions py-4 mt-lg-0">
                          <Button
                            component={Link}
                            className="mr-4"
                            color="info"
                            to="/auth/change-password"
                            size="sm"
                          >
                            Change Password
                          </Button>
                          <Button
                            type="button"
                            onClick={this.props.logout}
                            color="danger"
                            size="sm"
                          >
                            Logout
                          </Button>
                          { 1 + 2 === 3 ? (
                            null
                          ) : (
                            <Button
                              className="float-right"
                              color="default"
                              href="!#"
                              onClick={e => e.preventDefault()}
                              size="sm"
                            >
                              Message
                            </Button>
                          ) }
                        </div>
                      </Col>
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Followers</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
                            <span className="description">Trainings</span>
                          </div>
                          <div>
                            <span className="heading">523</span>
                            <span className="description">Points</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-5">
                      <h3>
                        { this.props.userInfo.name }{" "}
                        <span className="font-weight-light">, { this.props.userInfo.email }</span>
                      </h3>
                      <div className="h6 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        Bucharest, Romania
                      </div>
                      <div className="h6 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        Solution Manager
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        University of Computer Science
                      </div>
                    </div>
                    <div className="mt-5 py-5 border-top text-center">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p>
                            An artist of considerable range, Ryan — the name taken
                            by Melbourne-raised, Brooklyn-based Nick Murphy —
                            writes, performs and records all of his own music,
                            giving it a warm, intimate feel with a solid groove
                            structure. An artist of considerable range.
                          </p>
                          <a href="!#" onClick={e => e.preventDefault()}>
                            Show more
                          </a>
                        </Col>
                      </Row>
                    </div>
                  </div>
                ) : null }
              </Card>
            </Container>
          </section>
        </main>     
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(authActions.getProfile()),
  logout: () => dispatch(authActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
