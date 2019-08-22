import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Card, Container, Row, Col, Modal, } from 'reactstrap'
import { authActions } from '../App/auth/actions'

export class AccountPage extends React.Component {
  state = {
    editAccountModal: false
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
                          <a href="!#" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              style={{width: 180 + 'px'}}
                              className="rounded-circle"
                              src={this.props.userInfo.avatar}
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
                            tag={Link}
                            className="mr-4"
                            color="info"
                            to="/account/change-password"
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
                    <div className="text-center mt-5">
                      <h3>{ this.props.userInfo.name }</h3>
                      <h4>{ this.props.userInfo.email }</h4>
                    </div>
                    <div className="mt-5 py-5 border-top text-center">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p>
                            Account description
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center mb-5">
                      <Button
                        color="primary"
                        type="button"
                        size="sm"
                        onClick={() => this.toggleModal("editAccountModal")}
                      >
                        Edit Account
                      </Button>
                    </div>
                  </div>
                ) : null }
              </Card>
            </Container>
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.editAccountModal}
              toggle={() => this.toggleModal("editAccountModal")}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="editAccountModalLabel">
                  Edit your account
                </h5>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("editAccountModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                
              </div>
              <div className="modal-footer">
                <Button
                  color="secondary"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("editAccountModal")}
                >
                  Close
                </Button>
                <Button color="primary" type="button">
                  Save changes
                </Button>
              </div>
            </Modal>
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
