import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'
import { authActions } from 'store/auth/actions'

class TrainingsNavbar extends Component {
  render() {
    const { t } = this.props
    return (
      <>
        <header className="header-global header-sticky">
          <Navbar
            className="navbar-dark bg-default navbar"
            expand="lg"
            id="navbar-dark"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("../../assets/img/brand/repnote-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="Repnote logo"
                          src={require("../../assets/img/brand/repnote.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink to="/landing" tag={Link}>
                      <span className="nav-link-inner--text">{ t('components.navbar.home') }</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/trainings" tag={Link}>
                      <span className="nav-link-inner--text">{ t('components.navbar.trainings') }</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing/contact" tag={Link}>
                      <span className="nav-link-inner--text">{ t('components.navbar.contact') }</span>
                    </NavLink>
                  </NavItem>
                  <div className="d-block d-lg-none">
                    { this.props.isAuthenticated ? (
                      <>
                        <NavItem>
                          <NavLink to="/trainings/create" tag={Link}>
                            <span className="nav-link-inner--text">{ t('components.navbar.createTraining') }</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/account" tag={Link}>
                            <span className="nav-link-inner--text">{ t('components.navbar.account') }</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/account/change-password" tag={Link}>
                            <span className="nav-link-inner--text">{ t('components.navbar.changePassword') }</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink onClick={this.props.logout}>
                            <span className="nav-link-inner--text">{ t('components.navbar.logout') }</span>
                          </NavLink>
                        </NavItem>
                      </>
                    ) : (
                      <>
                        <NavItem>
                          <NavLink to="/auth/login" tag={Link}>
                            <span className="nav-link-inner--text">{ t('components.navbar.login') }</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/auth/register" tag={Link}>
                            <span className="nav-link-inner--text">{ t('components.navbar.register') }</span>
                          </NavLink>
                        </NavItem>
                      </>
                    ) }
                  </div>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto d-none d-lg-flex" navbar>
                  { this.props.isAuthenticated ? (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="fa fa-bars" />
                        <span className="nav-link-inner--text d-lg-none"></span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/trainings/create" tag={Link}>
                          { t('components.navbar.createTraining') }
                        </DropdownItem>
                        <DropdownItem to="/account" tag={Link}>
                          { t('components.navbar.account') }
                        </DropdownItem>
                        <DropdownItem to="/account/change-password" tag={Link}>
                          { t('components.navbar.changePassword') }
                        </DropdownItem>
                        <DropdownItem onClick={this.props.logout}>
                          { t('components.navbar.logout') }
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <>
                      <NavItem>
                        <NavLink to="/auth/login" tag={Link}>
                          <span className="nav-link-inner--text">{ t('components.navbar.login') }</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/auth/register" tag={Link}>
                          <span className="nav-link-inner--text">{ t('components.navbar.register') }</span>
                        </NavLink>
                      </NavItem>
                    </>
                  ) }
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(TrainingsNavbar))
