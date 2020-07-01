import React from 'react'
import { Link } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap'

const TrainingTiles = ({ training, showUser = true }) => (
  <Col lg="4" className="mb-4">
    <Card className="shadow border-0">
      <CardBody className="py-4 card-body-flex">
        <div>
          { showUser ? (
            <div className="mb-2">
              <img style={{width: 60 + 'px', height: 60 + 'px'}} className="trainings-image img-fluid rounded-circle shadow" src={training.user.avatar} alt="img" />
              <span className="description ml-2">
                <Link
                  to={'/users/' + training.user.slug}
                >
                  { training.user.name }
                </Link>
              </span>
            </div>
          ) : null }
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div>
              <Badge color="info" pill className="mr-1 mt-1">
                { training.category.name }
              </Badge>
              <Badge color="danger" pill className="mr-1 mt-1">
                { training.advancementLevel.name }
              </Badge>
            </div>
            <div>
              <i className="fa fa-heart" /> { training.likes.length }
            </div>
          </div>
          <h6 className="text-primary">
            { training.name }
          </h6>
          <p className="description">
            { training.goal }
          </p>
        </div>
        <Button
          className="mt-2 btn-block"
          color="default"
          size="sm"
          to={'/trainings/' + training.id}
          tag={Link}
        >
          Open training
        </Button>
      </CardBody>
    </Card>
  </Col>
)

export default TrainingTiles