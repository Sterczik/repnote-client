import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const TrainingShowError = () => (
  <Container className="training-error my-5">
    <Row className="justify-content-center text-center">
      <Col lg="8">
        <i className="fa fa-ambulance" />
        <h2 className="display-3 mt-4">Error</h2>
        <p className="lead text-muted">
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
  </Container>
)

export default TrainingShowError