import React from 'react'
import { Link } from 'react-router-dom'
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
  Col,
  UncontrolledTooltip
} from 'reactstrap'
import { connect } from 'react-redux'
import { authActions } from '../../containers/App/auth/actions'

class TrainingsNavbar extends React.Component {
  render() {
    return (
      <>
        <header className="header-global">
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
              <button className="navbar-toggler" id="navbar-default">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-default">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("../../assets/img/brand/repnote.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-default">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Trainings</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/trainings" tag={Link}>
                        Trainings
                      </DropdownItem>
                      <DropdownItem to="/trainings/create" tag={Link}>
                        Create training
                      </DropdownItem>
                      <DropdownItem onClick={this.props.logout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="!#"
                      id="tooltip356691234"
                      target="_blank"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Settings
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356691234">
                      Settings
                    </UncontrolledTooltip>
                  </NavItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsNavbar)
