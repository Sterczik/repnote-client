import React from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap'

const TrainingTiles = ({ training }) => (
  <Col lg="4" className="mb-5">
    <Card className="shadow border-0">
      <CardBody className="py-4 card-body-flex">
        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
          <i className="ni ni-check-bold" />
        </div>
        <img style={{width: 50 + 'px'}} className="img-fluid rounded-circle shadow" src={training.user.avatar} alt="img" />
        <h6 className="text-primary text-uppercase">
          { training.name } - { training.user.name }
        </h6>
        <p className="description mt-3">
          { training.category.name }
        </p>
        <p className="description mt-3">
          { training.exercises.length }
        </p>
        <p className="description mt-3">
          { training.goal }
        </p>
        <div>
          <Badge color="primary" pill className="mr-1">
            lorem
          </Badge>
          <Badge color="primary" pill className="mr-1">
            ipsum
          </Badge>
          <Badge color="primary" pill className="mr-1">
            dolor
          </Badge>
        </div>
        <Button
          className="mt-4"
          color="primary"
          to={'/trainings/' + training.id}
          tag={Link}
        >
          See more
        </Button>
      </CardBody>
    </Card>
  </Col>
)

export default TrainingTiles