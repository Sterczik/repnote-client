import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'

class SimpleFooter extends Component {
  render() {
    const { t, i18n } = this.props
    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }
    return (
      <>
        <footer className="footer footer-dark">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xs="7">
                <div className="copyright">
                  © 2020{" "}
                  <a
                    href="https://github.com/Sterczik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kamil Sterczewski
                  </a>
                </div>
              </Col>
              <Col xs="5">
                <Nav className="nav-footer justify-content-end">
                  <button onClick={() => changeLanguage('en')}>en</button>
                  <button onClick={() => changeLanguage('pl')}>pl</button>
                  <NavItem>
                    <NavLink
                      to="/landing/contact"
                      tag={Link}
                    >
                      { t('components.footer.contact') }
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

export default withTranslation()(SimpleFooter)
