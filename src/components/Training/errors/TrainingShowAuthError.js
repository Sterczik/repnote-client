import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const TrainingShowAuthError = () => (
  <Container className="training-authError my-5">
    <Row className="justify-content-center text-center">
      <Col lg="8">
        <i className="fa fa-lock" />
        <h2 className="display-3 mt-4">This training is private</h2>
        <p className="lead text-muted">
          Training is able to see only for it's creator.
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

export default TrainingShowAuthError