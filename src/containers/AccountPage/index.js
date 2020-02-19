import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import { authActions } from '../App/auth/actions'
import TrainingTiles from '../../components/Training/variants/TrainingTiles'
import EditAccountModal from '../../components/Modals/EditAccountModal/EditAccountModal'
import ChangeAvatarModal from '../../components/Modals/ChangeAvatarModal/ChangeAvatarModal'

export class AccountPage extends React.Component {
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
                          <div onClick={() => this.toggleModal("changeAvatarModal")}>
                            <img
                              alt="Avatar"
                              style={{ width: 180 + 'px' }}
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
                            Change Password
                          </Button>
                          <Button
                            className="float-right"
                            color="default"
                            onClick={this.toggle}
                            size="sm"
                          >
                            { this.state.showTrainings ? 'Hide trainings' : 'Show trainings' }
                          </Button>
                        </div>
                      </Col>
                      <Col className="order-lg-1" lg="4">
                        <div className="card-profile-stats d-flex justify-content-center">
                          <div>
                            <span className="heading btn-inner--icon mr-1">
                              <i className={`fa fa-${this.props.userInfo.provider}`} />
                            </span>
                            <span className="description">Provider</span>
                          </div>
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Followers</span>
                          </div>
                          { this.props.userInfo.trainings && <div>
                            <span className="heading">{ this.props.userInfo.trainings.length }</span>
                            <span className="description">Trainings</span>
                          </div> }
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-4">
                      <div className="text-center">
                        <Button
                          color="default"
                          data-dismiss="modal"
                          size="sm"
                          type="button"
                          onClick={() => this.props.resetAvatar()}
                        >
                          Reset avatar
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
                              Edit Profile
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
  editProfile: (name, description) => dispatch(authActions.editProfile(name, description)),
  changeAvatar: (file) => dispatch(authActions.changeAvatar(file)),
  resetAvatar: () => dispatch(authActions.resetAvatar()),
  logout: () => dispatch(authActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
