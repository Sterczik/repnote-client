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
    <Row className="mb-4 text-center">
      <Col sm="12">
        <h3 className="display-3">{ props.training.name }</h3>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div>
              <Button
                color="primary"
                onClick={() => props.likeTraining(props.training.id)}
              >
                Like or dislike
              </Button>
              <p>Liked: { props.training.liked }</p>
            </div>

            <div>
              { props.training.user.name }

              <br />

              Category: {props.training.category.name}

              <br />

              Description: {props.training.description}

              <br />

              Goal: {props.training.goal}

              <br />
            </div>

            <div>
              { props.training.exercises.map((exercise) => (
                <div key={exercise.id}>

                  <div>
                    { exercise.name }
                  </div>

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

                  <br />
                </div>
              )) }
            </div>

            <div>
              { props.training.edit ? (
                <div>
                  <div>
                    <Button
                      color="primary"
                      onClick={() => props.removeTraining(props.training.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      color="primary"
                      onClick={() => props.switchTrainingStatus(props.training.id)}
                    >
                      Change Status
                    </Button>
                    <p>
                      { props.training.private ? (
                        'Private'
                      ) : (
                        'Public'
                      )}
                    </p>
                    <Button
                      color="primary"
                      to={'/trainings/' + props.training.id + '/edit'}
                      tag={Link}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              ) : null }
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </>
)

export default TrainingShow
