import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { authActions } from 'store/auth/actions'
import UserShowLoading from 'components/User/loading/UserShowLoading'
import UserShowError from 'components/User/errors/UserShowError'
import TrainingTiles from 'components/Training/variants/TrainingTiles'
import EditAccountModal from 'components/Modals/EditAccountModal/EditAccountModal'
import ChangeAvatarModal from 'components/Modals/ChangeAvatarModal/ChangeAvatarModal'

class AccountPage extends Component {
  state = {
    showTrainings: false,
    editAccountModal: false,
    changeAvatarModal: false
  }
  toggle = () => {
    this.setState({
      showTrainings: !this.state.showTrainings
    })
  }
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state]
    })
  }
  componentDidMount() {
    this.props.getProfile()
  }
  render() {
    const { t } = this.props
    return (
      <>
        <Helmet
          titleTemplate={ t('views.accountpage.myAccount') }
          defaultTitle={ t('views.accountpage.myAccount') }
        >
          <meta name="description" content={ t('views.accountpage.myAccount') } />
        </Helmet>
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
              { !this.props.userInfoState.isLoaded ? (
                <UserShowLoading />
              ) : this.props.userInfoState.isLoaded
                && !this.props.userInfoState.isSuccess ? (
                <UserShowError />
              ) : (
                <Card className="card-profile shadow mt--150">
                  { this.props.userInfo ? (
                    <div className="px-4">
                      <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                          <div className="card-profile-image">
                            <div>
                              <img
                                alt="Avatar"
                                className="rounded-circle"
                                src={ this.props.userInfo.avatar }
                              />
                            </div>
                          </div>
                        </Col>
                        <Col
                          className="order-lg-3 text-lg-right align-self-lg-center"
                          lg="4"
                        >
                          <div className="card-profile-actions py-4 mt-lg-0">
                            <Button
                              tag={Link}
                              color="info"
                              to="/account/change-password"
                              size="sm"
                            >
                              { t('views.accountpage.changePassword') }
                            </Button>
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
                            { this.props.userInfo && <div>
                              <span className="heading">{ this.props.userInfo.followersLength }</span>
                              <span className="description">{ t('views.accountpage.followers') }</span>
                            </div> }
                            { this.props.userInfo.following && <div>
                              <span className="heading">{ this.props.userInfo.following.length }</span>
                              <span className="description">{ t('views.accountpage.following') }</span>
                            </div> }
                            { this.props.userInfo.trainings && <div>
                              <span className="heading">{ this.props.userInfo.trainings.length }</span>
                              <span className="description">{ t('views.accountpage.trainings') }</span>
                            </div> }
                          </div>
                        </Col>
                      </Row>
                      <div className="mt-4">
                        <div className="text-center mb-1">
                          <span className="description">{ t('views.accountpage.provider') } </span>
                          <span><i className={`fa fa-${this.props.userInfo.provider}`}/></span>
                        </div>
                        <div className="text-center">
                          <Button
                            color="default"
                            size="sm"
                            type="button"
                            onClick={() => this.toggleModal("changeAvatarModal")}
                          >
                            { t('views.accountpage.editAvatar') }
                          </Button>
                          <Button
                            color="default"
                            data-dismiss="modal"
                            size="sm"
                            type="button"
                            onClick={() => this.props.resetAvatar()}
                          >
                            { t('views.accountpage.resetAvatar') }
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 mb-5">
                        { this.state.showTrainings ? (
                          <Row className="justify-content-center">
                            <Col lg="12">
                              <Row className="row-grid">
                                { this.props.userInfo.trainings && this.props.userInfo.trainings.map(training => (
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
                              <h3>{ this.props.userInfo.name }</h3>
                              <h4>{ this.props.userInfo.email }</h4>
                            </div>
                            { this.props.userInfo.description &&
                              <div className="mt-5 py-5 border-top text-center">
                                <Row className="justify-content-center">
                                  <Col lg="9">
                                    <p>
                                      { this.props.userInfo.description }
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            }
                            <div className="text-center">
                              <Button
                                color="primary"
                                type="button"
                                size="sm"
                                onClick={() => this.toggleModal("editAccountModal")}
                              >
                                { t('views.accountpage.editProfile') }
                              </Button>
                            </div>
                          </>
                        ) }
                      </div>
                      <EditAccountModal
                        user={this.props.userInfo}
                        editAccountModal={this.state.editAccountModal}
                        toggleModal={this.toggleModal}
                        editProfile={this.props.editProfile}
                      />
                      <ChangeAvatarModal
                        avatar={this.props.userInfo.avatar}
                        changeAvatarModal={this.state.changeAvatarModal}
                        toggleModal={this.toggleModal}
                        changeAvatar={this.props.changeAvatar}
                      />
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
  userInfo: state.auth.userInfo,
  userInfoState: state.auth.userInfoState
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(authActions.getProfile()),
  editProfile: (name, description) => dispatch(authActions.editProfile(name, description)),
  changeAvatar: (file) => dispatch(authActions.changeAvatar(file)),
  resetAvatar: () => dispatch(authActions.resetAvatar()),
  logout: () => dispatch(authActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(AccountPage))
