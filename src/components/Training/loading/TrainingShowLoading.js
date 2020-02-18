import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const TrainingShowLoading = () => (
  <Container className="training-loading my-5">
    <Row className="justify-content-center text-center">
      <Col lg="8">
        <h2 className="display-3 mt-4">Loading</h2>
      </Col>
    </Row>
  </Container>
)

export default TrainingShowLoading