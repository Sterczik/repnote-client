import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardBody,
  Row,
  Col,
  Button
} from 'reactstrap'

const TrainingShow = (props) => (
  <>
    <Row className="justify-content-center">
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">

          <div className="px-4">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-training-image">
                  <img
                    alt="..."
                    style={{width: 180 + 'px'}}
                    className="rounded-circle"
                    src={props.training.user.avatar}
                  />
                </div>
              </Col>
              <Col
                className="order-lg-3 text-lg-right align-self-lg-center"
                lg="4"
              >
                <div className="card-training-actions py-4 mt-lg-0">
                  { !props.training.edit ? (
                    <Button
                      type="button"
                      onClick={() => props.likeTraining(props.training.id)}
                      color="primary"
                      size="sm"
                    >
                      Like
                    </Button>
                  ) : null }
                  { props.training.edit ? (
                    <>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => props.removeTraining(props.training.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => props.switchTrainingStatus(props.training.id)}
                      >
                        Change Status
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        size="sm"
                        to={'/trainings/' + props.training.id + '/edit'}
                        tag={Link}
                      >
                        Edit
                      </Button>
                    </>
                  ) : null }
                </div>
              </Col>
              <Col className="order-lg-1" lg="4">
                <div className="card-training-stats d-flex justify-content-center">
                  { true && <div>
                    <span className="heading">{ props.training.likes.length }</span>
                    <span className="description">Likes</span>
                  </div> }
                  { props.training.edit && <div>
                    <span className="heading">{ props.training.private ? 'Private' : 'Public' }</span>
                    <span className="description">Status</span>
                  </div> }
                </div>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <h3>{ props.training.user.name }</h3>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="mb-3 text-center">
                <Col sm="12">
                  <h3 className="display-3">{ props.training.name }</h3>
                </Col>
              </Row>
              <Row className="mb-2 text-center">
                <Col sm="12">
                  <h5 className="display-5">Category: {props.training.category.name}</h5>
                </Col>
              </Row>
              <Row className="mb-3 text-center">
                <Col sm="12">
                  <h5 className="display-5">Advancement Level: {props.training.advancementLevel.name}</h5>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="9">
                  <p>
                    { props.training.goal }
                  </p>
                </Col>
              </Row>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="justify-content-center">
                <Col lg="9">
                  <p>
                    { props.training.description }
                  </p>
                </Col>
              </Row>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              { props.training.exercises.map((exercise) => (
                <Row className="justify-content-center" key={exercise.id}>
                  <Col lg="9">
                    <p>
                      { exercise.name }
                    </p>
                  </Col>
                  { exercise.rounds.map((round) => (
                    <div key={round.id}>
                      <div>
                        Weight: { round.weight } kg
                      </div>
                      <div>
                        Reps: { round.reps }
                      </div>
                    </div>
                  )) }
                </Row>
              )) }
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </>
)

export default TrainingShow
