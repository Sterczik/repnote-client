import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup
} from 'reactstrap'

class SimpleFooter extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    localStorage.setItem('lng', value)
    window.location.reload()
  }

  render() {
    const lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : 'pl'
    return (
      <>
        <footer className="footer footer-dark">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col xs="8">
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
              <Col xs="4">
                <InputGroup className="input-group-alternative">
                  <Input
                    type="select"
                    name="lng"
                    value={lng}
                    onChange={this.handleChange}
                    className="form-control-alternative"
                  >
                    <option value="en">EN</option>
                    <option value="pl">PL</option>
                  </Input>
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    )
  }
}

export default SimpleFooter
