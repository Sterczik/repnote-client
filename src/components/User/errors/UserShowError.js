import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Button
} from 'reactstrap'

const UserShowError = () => (
  <Row className="justify-content-center text-center">
    <Col lg="8">
      <h2 className="display-3 mt-4">Error</h2>
      <p className="lead">
        An error occured. Try to refresh the page or contact us.
      </p>
      <Button
        color="primary"
        to={'/trainings'}
        tag={Link}
      >
        Trainings
      </Button>
    </Col>
  </Row>
)

export default UserShowError