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
          { training.name }
        </h6>
        <p className="description mt-3">
          <Link
            to={'/users/' + training.user.slug}
          >
            { training.user.name }
          </Link>
        </p>
        <p className="description mt-3">
          { training.goal }
        </p>
        <div>
          <Badge color="success" pill className="mr-1 mt-1">
            { training.likes.length } likes
          </Badge>
          <Badge color="info" pill className="mr-1 mt-1">
            { training.category.name }
          </Badge>
          <Badge color="danger" pill className="mr-1 mt-1">
            { training.advancementLevel.name }
          </Badge>
          <Badge color="default" pill className="mr-1 mt-1">
            { training.exercises.length } exercises
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