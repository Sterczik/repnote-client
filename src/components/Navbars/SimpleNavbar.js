import React from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'headroom.js'
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
import { authActions } from '../../containers/App/auth/actions'

class SimpleNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"))
    headroom.init()
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
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
                      <span className="nav-link-inner--text">Home</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing/about" tag={Link}>
                      <span className="nav-link-inner--text">About</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing/contact" tag={Link}>
                      <span className="nav-link-inner--text">Contact us</span>
                    </NavLink>
                  </NavItem>
                  {/* <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Lorem ipsum</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="!#"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Getting started
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Lorem ipsum
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                  { this.props.isAuthenticated ? (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="fa fa-user-circle-o" />
                        <span className="nav-link-inner--text d-lg-none">Examples</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/trainings" tag={Link}>
                          Trainings
                        </DropdownItem>
                        <DropdownItem to="/account/trainings" tag={Link}>
                          My trainings
                        </DropdownItem>
                        <DropdownItem to="/account" tag={Link}>
                          My account
                        </DropdownItem>
                        <DropdownItem onClick={this.props.logout}>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <>
                      <NavItem>
                        <NavLink to="/auth/login" tag={Link}>
                          <span className="nav-link-inner--text">Login</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/auth/register" tag={Link}>
                          <span className="nav-link-inner--text">Register</span>
                        </NavLink>
                      </NavItem>
                    </>
                  ) }
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="!#"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem> */}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleNavbar)
