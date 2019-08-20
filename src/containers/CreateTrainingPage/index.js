import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation'

import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap'

import {
  createTraining
} from '../App/training/actions'

export class CreateTrainingPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      goal: '',
      private: false,
      category: 1,
      exercises: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addExercise = (e) => {
    this.setState((prevState) => ({
      exercises: [...prevState.exercises, { name: '', rounds: [] }],
    }))
  }

  addRound = (index) => {
    this.setState(prevState => {
      const newExercises = [...prevState.exercises]
      newExercises[index].rounds = [...newExercises[index].rounds, { reps: '', weight: '' }]
      return { exercises: newExercises }
    })
  }

  removeExercise = (index) => {
    this.setState((prevState) => ({
      exercises: prevState.exercises.filter((val, i) => i !== index)
    }))
  }

  removeRound = (index, indexRound) => {
    this.setState(prevState => {
      const newExercises = [...prevState.exercises]
      newExercises[index].rounds = newExercises[index].rounds.filter((val, i) => i !== indexRound)
      return { exercises: newExercises }
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleChangeExercise = (index, e, type) => {
    const { value } = e.target
    this.setState(prevState => {
      const newExercises = [...prevState.exercises]
      if (type === 'name') {
        newExercises[index].name = value
      } else if (type === 'category') {
        newExercises[index].category = Number(value)
      }
      return { exercises: newExercises }
    })
  }

  handleChangeRound = (index, indexRound, e, type) => {
    const { value } = e.target
    this.setState(prevState => {
      const newExercises = [...prevState.exercises]
      if (type === 'weight') {
        newExercises[index].rounds[indexRound].weight = value
      } else if (type === 'reps') {
        newExercises[index].rounds[indexRound].reps = value
      }
      return { exercises: newExercises }
    })
  }

  changeStatus() {
    this.setState({
      ...this.state,
      private: !this.state.private
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createTraining({
      name: this.state.name,
      description: this.state.description,
      goal: this.state.goal,
      private: this.state.private,
      category: Number(this.state.category),
      exercises: this.state.exercises
    })
  }

  render() {
    return (
      <>
        <Helmet
          titleTemplate="Create training"
          defaultTitle="Create training"
        >
          <meta name="description" content="Create training" />
        </Helmet>
        <main>
          <section className="section section-shaped section-lg">
            <Container>
              <Row className="mb-4 text-center">
                <Col sm="12">
                  <h2 className="display-2">Create your training</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <AvForm
                        onValidSubmit={this.handleSubmit}
                      >
                        <Row>
                          <Col sm="12" lg="6">
                            <AvGroup>
                              <AvInput
                                placeholder="Training name"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                                className="form-control-alternative"
                              />
                              <AvFeedback>Training name is required</AvFeedback>
                            </AvGroup>
                          </Col>
                          <Col sm="12" lg="6">
                            <AvField
                              // label="Training category"
                              type="select"
                              value={this.state.category}
                              onChange={this.handleChange}
                              required
                              name="category"
                              className="form-control-alternative"
                            >
                              { this.props.trainingCategories.map((trainingCategory) => (
                                <option key={trainingCategory.id} value={trainingCategory.id}>{ trainingCategory.name }</option>
                              )) }
                            </AvField>
                          </Col>
                        </Row>

                        <AvGroup>
                          <AvInput
                            placeholder="Training description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            required
                            className="form-control-alternative"
                            type="textarea"
                          />
                          <AvFeedback>Training description is required</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                          <AvInput
                            placeholder="Training goal"
                            type="text"
                            name="goal"
                            value={this.state.goal}
                            onChange={this.handleChange}
                            required
                            className="form-control-alternative"
                          />
                          <AvFeedback>Training goal is required</AvFeedback>
                        </AvGroup>

                        <Row className="my-3">
                          <Col sm="6">
                            <h5>Training status - {this.state.private ? 'Private' : 'Public'}</h5>
                          </Col>
                          <Col sm="6">
                            <Button
                              className="btn-block"
                              color="secondary"
                              onClick={() => this.changeStatus()}
                            >
                              Change status
                            </Button>
                          </Col>
                        </Row>

                        <div>
                          {
                            this.state.exercises.length === 0 ? (
                              <h3>No exercises yet</h3>
                            ) : (
                              this.state.exercises.map((exercise, index) => (
                                <>
                                  <Row key={index}>
                                    <Col sm="12" lg="4">
                                      <AvGroup>
                                        <AvInput
                                          placeholder="Exercise name"
                                          type="text"
                                          name={`exercise-${index}`}
                                          value={this.state.exercises[index].name}
                                          onChange={e => this.handleChangeExercise(index, e, 'name')}
                                          required
                                          className="form-control-alternative"
                                        />
                                        <AvFeedback>Exercise name is required</AvFeedback>
                                      </AvGroup>
                                    </Col>
                                    <Col sm="12" lg="4">
                                      <AvField
                                        // label="Exercise category"
                                        type="select"
                                        value={this.state.exercises[index].category}
                                        onChange={e => this.handleChangeExercise(index, e, 'category')}
                                        name="exercise_category"
                                        className="form-control-alternative"
                                      >
                                        { this.props.exerciseCategories.map((exerciseCategory) => (
                                          <option key={exerciseCategory.id} value={Number(exerciseCategory.id)}>{ exerciseCategory.name }</option>
                                        )) }
                                      </AvField>
                                    </Col>
                                    <Col sm="12" lg="4">
                                      <Button className="btn-block" type="button" color="danger" onClick={() => this.removeExercise(index)}>Remove Exercise</Button>
                                    </Col>
                                  </Row>

                                  <div className="my-3">
                                    {
                                      exercise.rounds.length === 0 ? (
                                        null
                                      ) : (
                                        exercise.rounds.map((round, indexRound) => (
                                          <div key={indexRound}>

                                            <Row>
                                              <Col sm="12" lg="4">
                                                <AvGroup>
                                                  <AvInput
                                                    placeholder="Round weight"
                                                    type="number"
                                                    name={`round-${index}-${indexRound}-weight`}
                                                    value={this.state.exercises[index].rounds[indexRound].weight}
                                                    onChange={e => this.handleChangeRound(index, indexRound, e, 'weight')}
                                                    required
                                                    className="form-control-alternative"
                                                  />
                                                  <AvFeedback>Round weight is required</AvFeedback>
                                                </AvGroup>
                                              </Col>
                                              <Col sm="12" lg="4">
                                                <AvGroup>
                                                  <AvInput
                                                    placeholder="Round reps"
                                                    type="number"
                                                    name={`round-${index}-${indexRound}-reps`}
                                                    value={this.state.exercises[index].rounds[indexRound].reps}
                                                    onChange={e => this.handleChangeRound(index, indexRound, e, 'reps')}
                                                    required
                                                    className="form-control-alternative"
                                                  />
                                                  <AvFeedback>Round reps is required</AvFeedback>
                                                </AvGroup>
                                              </Col>
                                              <Col sm="12" lg="4">
                                                <Button
                                                  className="btn-block"
                                                  color="danger"
                                                  onClick={() => this.removeRound(index, indexRound)}
                                                >
                                                  Remove Round
                                                </Button>
                                              </Col>
                                            </Row>
                                          </div>
                                        ))
                                      )
                                    }
                                    <div>
                                      <Button type="button" color="primary" onClick={() => this.addRound(index)} disabled={this.state.exercises[index].rounds.length >= 20 ? true : false}>Add Round</Button>
                                    </div>
                                  </div>
                                </>
                              ))
                            )
                          }
                        </div>

                        <Row className="my-3">
                          <Col sm="12" lg="6">
                            <Button className="btn-block" type="button" color="info" onClick={() => this.addExercise()} disabled={this.state.exercises.length >= 10 ? true : false}>Add Exercise</Button>
                          </Col>
                          <Col sm="12" lg="6">
                            <Button className="btn-block" type="submit" color="success">Save training</Button>
                          </Col>
                        </Row>
                      </AvForm>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  trainingCategories: state.global.trainingCategories,
  exerciseCategories: state.global.exerciseCategories
})

const mapDispatchToProps = (dispatch) => ({
  createTraining: (training) => dispatch(createTraining(training))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrainingPage)
