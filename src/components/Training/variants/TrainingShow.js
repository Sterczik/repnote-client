import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Card,
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
                    alt="Avatar"
                    style={{ width: 180 + 'px', height: 180 + 'px' }}
                    className="rounded-circle"
                    src={props.trainingData.training.user.avatar}
                  />
                </div>
              </Col>
              <Col
                className="order-lg-3 text-lg-right align-self-lg-center"
                lg="4"
              >
                <div className="card-training-actions py-4 mt-lg-0">
                  { !props.trainingData.training.isOwner && props.isAuthenticated
                    ? (
                      <>
                        <Button
                          type="button"
                          onClick={() => props.cloneTraining(props.trainingData.training.id)}
                          color="info"
                          size="sm"
                        >
                          Clone
                        </Button>
                        { !props.trainingData.training.liked ? (
                          <Button
                            type="button"
                            onClick={() => props.likeTraining(props.trainingData.training.id, true)}
                            color="primary"
                            size="sm"
                          >
                            Like <i className="fa fa-heart" />
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            onClick={() => props.likeTraining(props.trainingData.training.id, false)}
                            color="danger"
                            size="sm"
                          >
                            Unlike <i className="fa fa-heart" />
                          </Button>
                        ) }
                      </>
                    )
                    : null }
                  { props.trainingData.training.isOwner ? (
                    <>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => props.removeTraining(props.trainingData.training.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="default"
                        size="sm"
                        onClick={() => props.switchTrainingStatus(props.trainingData.training.id)}
                      >
                        Change Status
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        size="sm"
                        to={'/trainings/' + props.trainingData.training.id + '/edit'}
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
                    <span className="heading">{ props.trainingData.training.likesLength }</span>
                    <span className="description">Likes</span>
                  </div> }
                  { props.trainingData.training.isOwner && <div>
                    <span className="heading">{ props.trainingData.training.private ? 'Private' : 'Public' }</span>
                    <span className="description">Status</span>
                  </div> }
                </div>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <h3>{ props.trainingData.training.user.name }</h3>
            </div>
            <div className="mt-3 py-3 border-top text-center">
              <Row className="mb-2 text-center">
                <Col>
                  <h4 className="display-4">Name</h4>
                  <h5 className="display-5">{ props.trainingData.training.name }</h5>
                </Col>
              </Row>
              <Row className="mb-2 text-center">
                <Col>
                  <h4 className="display-4">Category</h4>
                  <h5 className="display-5">{props.trainingData.training.category.name}</h5>
                </Col>
              </Row>
              <Row className="mb-2 text-center">
                <Col>
                  <h4 className="display-4">Advancement Level</h4>
                  <h5 className="display-5">{props.trainingData.training.advancementLevel.name}</h5>
                </Col>
              </Row>
              <Row className="mb-2 text-center">
                <Col lg="12">
                  <h4 className="display-4">Goal</h4>
                  <h5 className="display-5">{props.trainingData.training.goal}</h5>
                </Col>
              </Row>
              <Row className="mb-2 text-center">
                <Col lg="12">
                  <h4 className="display-4">Description</h4>
                  <p>{ props.trainingData.training.description }</p>
                </Col>
              </Row>
            </div>
            <div className="py-4 border-top text-center">
              { props.trainingData.training.subtrainings.map((subtraining) => (
                <div key={subtraining.id}>
                  <Row className="mb-2 text-center">
                    <Col lg="12">
                      <h4 className="display-4">{ subtraining.name }</h4>
                    </Col>
                  </Row>
                  { subtraining.exercises.map((exercise) => (
                    <Row className="mb-2 text-center" key={exercise.id}>
                      <Col lg="12">
                        <h5 className="display-5">{ exercise.name }</h5>
                      </Col>
                      <Col lg="12">
                        { exercise.rounds.map((round) => (
                          <div className="mb-3" key={round.id}>
                            <p className="mb-0">Weight: { round.weight } kg</p>
                            <p className="mb-0">Reps: { round.reps }</p>
                          </div>
                        )) }
                      </Col>
                    </Row>
                  )) }
                </div>
              )) }
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </>
)

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn
})

export default connect(mapStateToProps)(TrainingShow)
