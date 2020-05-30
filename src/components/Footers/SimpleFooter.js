import React from 'react'
import { Link } from 'react-router-dom'
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://github.com/Sterczik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kamil Sterczewski
                  </a>{" | "}
                  Theme created by {" "}
                  <a
                    href="https://www.creative-tim.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Tim
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      to="/landing/contact"
                      tag={Link}
                    >
                      Contact us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}

export default SimpleFooter
