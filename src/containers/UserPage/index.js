import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { getUserProfile } from '../App/global/actions'

export class AccountPage extends React.Component {
  componentDidMount() {
    const slug = this.props.match.params.name
    this.props.getUserProfile(slug)
  }
  render() {
    return (
      <>
        <Helmet
          titleTemplate="User"
          defaultTitle="User"
        >
          <meta name="description" content="User" />
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
                { this.props.userProfile ? (
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-2" lg="3">
                        <div className="card-profile-image">
                          <a href="!#" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              style={{width: 180 + 'px'}}
                              className="rounded-circle"
                              src={this.props.userProfile.avatar}
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
                            className="float-right"
                            color="default"
                            href="!#"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Message
                          </Button>
                        </div>
                      </Col>
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Followers</span>
                          </div>
                          { this.props.userProfile.trainings && <div>
                            <span className="heading">{ this.props.userProfile.trainings.length }</span>
                            <span className="description">Trainings</span>
                          </div> }
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-5">
                      <h3>{ this.props.userProfile.name }</h3>
                      <h4>{ this.props.userProfile.email }</h4>
                    </div>
                    <div className="mt-5 py-5 border-top text-center">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p>
                            Description
                          </p>
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
  userProfile: state.global.userProfile
})

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (slug) => dispatch(getUserProfile(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
