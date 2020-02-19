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
                    <NavLink to="/trainings" tag={Link}>
                      <span className="nav-link-inner--text">Trainings</span>
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
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                  { this.props.isAuthenticated ? (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="fa fa-bars" />
                        <span className="nav-link-inner--text d-lg-none"></span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem to="/trainings" tag={Link}>
                          Trainings
                        </DropdownItem>
                        <DropdownItem to="/trainings/create" tag={Link}>
                          Create training
                        </DropdownItem>
                        <DropdownItem to="/account" tag={Link}>
                          My account
                        </DropdownItem>
                        <DropdownItem to="/account/change-password" tag={Link}>
                          Change password
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

export default connect(mapStateToProps, mapDispatchToProps)(SimpleNavbar)
