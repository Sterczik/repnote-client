import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { getUserProfile, followUser } from 'store/global/actions'
import UserShowLoading from 'components/User/loading/UserShowLoading'
import UserShowError from 'components/User/errors/UserShowError'
import TrainingTiles from 'components/Training/variants/TrainingTiles'

class UserPage extends Component {
  state = {
    showTrainings: false
  }
  toggle = () => {
    this.setState({
      showTrainings: !this.state.showTrainings
    })
  }
  componentDidMount() {
    const slug = this.props.match.params.name
    this.props.getUserProfile(slug)
  }
  render() {
    const { t } = this.props
    const helmetContent = t('views.accountpage.userAccount')
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
        <div className="profile-page">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 bg-gradient-info"></div>
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

          <section className="section pt-4">
            <Container>
              { !this.props.userProfileState.isLoaded ? (
                <UserShowLoading />
              ) : this.props.userProfileState.isLoaded
                && !this.props.userProfileState.isSuccess ? (
                <UserShowError />
              ) : (
                <Card className="card-profile shadow mt--150">
                  { this.props.userProfile ? (
                    <div className="px-4">
                      <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                          <div className="card-profile-image">
                            <div>
                              <img
                                alt="Avatar"
                                className="rounded-circle"
                                src={ this.props.userProfile.avatar }
                              />
                            </div>
                          </div>
                        </Col>
                        <Col
                          className="order-lg-3 text-lg-right align-self-lg-center"
                          lg="4"
                        >
                          <div className="card-profile-actions py-4 mt-lg-0">
                            { this.props.userProfile.id && this.props.isAuthenticated
                            ? !this.props.userProfile.followed ? (
                              <Button
                                type="button"
                                onClick={() => { this.props.followUser(this.props.userProfile.id, true) }}
                                color="primary"
                                size="sm"
                              >
                                { t('views.accountpage.follow') }
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                onClick={() => { this.props.followUser(this.props.userProfile.id, false) }}
                                color="danger"
                                size="sm"
                              >
                                { t('views.accountpage.unfollow') }
                              </Button>
                            )
                            : null }
                            <Button
                              className="float-right"
                              color="default"
                              onClick={this.toggle}
                              size="sm"
                            >
                              { this.state.showTrainings
                              ? t('views.accountpage.hideTrainings')
                              : t('views.accountpage.showTrainings') }
                            </Button>
                          </div>
                        </Col>
                        <Col className="order-lg-1" lg="4">
                          <div className="card-profile-stats d-flex justify-content-center">
                            { this.props.userProfile && <div>
                              <span className="heading">{ this.props.userProfile.followersLength }</span>
                              <span className="description">{ t('views.accountpage.followers') }</span>
                            </div> }
                            { this.props.userProfile.following && <div>
                              <span className="heading">{ this.props.userProfile.following.length }</span>
                              <span className="description">{ t('views.accountpage.following') }</span>
                            </div> }
                            { this.props.userProfile.trainings && <div>
                              <span className="heading">{ this.props.userProfile.trainings.length }</span>
                              <span className="description">{ t('views.accountpage.trainings') }</span>
                            </div> }
                          </div>
                        </Col>
                      </Row>
                      <div className="my-5">
                        { this.state.showTrainings ? (
                          <Row className="justify-content-center">
                            <Col lg="12">
                              <Row className="row-grid">
                                { this.props.userProfile.trainings && this.props.userProfile.trainings.map(training => (
                                  <TrainingTiles
                                    training={training}
                                    showUser={false}
                                  />
                                )) }
                              </Row>
                            </Col>
                          </Row>
                        ) : (
                          <>
                            <div className="text-center">
                              <h3>{ this.props.userProfile.name }</h3>
                            </div>
                            { this.props.userProfile.description &&
                              <div className="mt-5 py-5 border-top text-center">
                                <Row className="justify-content-center">
                                  <Col lg="9">
                                    <p>
                                      { this.props.userProfile.description }
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            }
                          </>
                        ) }
                      </div>
                    </div>
                  ) : null }
                </Card>
              ) }
            </Container>
          </section>
        </div>     
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.global.userProfile,
  userProfileState: state.global.userProfileState,
  isAuthenticated: state.auth.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: (slug) => dispatch(getUserProfile(slug)),
  followUser: (id, follow) => dispatch(followUser(id, follow))
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserPage))
