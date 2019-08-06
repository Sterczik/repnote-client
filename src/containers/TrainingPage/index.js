import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import HttpsIcon from '@material-ui/icons/Https'
import LanguageIcon from '@material-ui/icons/Language'
import Tooltip from '@material-ui/core/Tooltip'

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

import {
  getTraining,
  removeTraining,
  switchTrainingStatus
} from '../App/training/actions'

export class TrainingPage extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.getTraining(this.props.match.params.id)
    }
  }

  render() {
    return (
      <>
        <Helmet
          titleTemplate="Training"
          defaultTitle="Training"
        >
          <meta name="description" content="Training" />
        </Helmet>
        <main>
          <section className="section section-shaped section-lg">
            <Container>
              { this.props.training.id ? (
                <>
                  <Row className="mb-4 text-center">
                    <Col sm="12">
                      <h3 className="display-3">{ this.props.training.name }</h3>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col lg="12">
                      <Card className="bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5">
                          <div>
                            { this.props.training.user.name }

                            Category: {this.props.training.category.name}

                            Description: {this.props.training.description}

                            Goal: {this.props.training.goal}
                          </div>

                          <div>
                            { this.props.training.exercises.map((exercise) => (
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
                              </div>
                            )) }
                          </div>

                          <div>
                            { this.props.training.edit ? (
                              <div>
                                <div>
                                  <Tooltip title="Delete">
                                    <IconButton color="primary" className="card__icon" onClick={() => this.props.removeTraining(this.props.training.id)}>
                                      <DeleteIcon />
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title="Change Status">
                                    <IconButton aria-label="Change Status" color="primary" type="submit" className="card__icon" onClick={() => this.props.switchTrainingStatus(this.props.training.id)}>
                                      { this.props.training.private ? (
                                        <HttpsIcon />
                                      ) : (
                                        <LanguageIcon />
                                      )}
                                    </IconButton>
                                  </Tooltip>
                                  <Tooltip title="Edit">
                                    <IconButton component={Link} to={'/trainings/' + this.props.training.id + '/edit'} color="primary" className="card__icon">
                                      <CreateIcon />
                                    </IconButton>
                                  </Tooltip>
                                </div>
                              </div>
                            ) : null }
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </>
                ) : (
                  <div>Loading</div>
                ) 
              }
            </Container>
          </section>
        </main>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  training: state.training
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  removeTraining: (id) => dispatch(removeTraining(id)),
  switchTrainingStatus: (id) => dispatch(switchTrainingStatus(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage)
