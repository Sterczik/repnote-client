import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap'

const TrainingShowError = () => (
  <Col lg="12" className="mb-3">
    <Card className="shadow border-0">
      <CardBody className="py-4 card-body-flex">
        OH NU! ERROR
        <Button
          className="mt-4"
          color="primary"
          to={'/trainings'}
          tag={Link}
        >
          Back
        </Button>
      </CardBody>
    </Card>
  </Col>
)

export default TrainingShowError