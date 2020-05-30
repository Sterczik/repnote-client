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
  Col,
  Label
} from 'reactstrap'

import {
  getTraining,
  editTraining
} from '../App/training/actions'

export class EditTrainingPage extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      description: '',
      goal: '',
      private: '0',
      category: 1,
      advancementLevel: 1,
      daysPerWeek: 3,
      subtrainings: []
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.props.getTraining(this.props.match.params.id)

    setTimeout(() => {
      this.setState({
        name: this.props.training.name,
        description: this.props.training.description,
        goal: this.props.training.goal,
        private: this.props.training.private ? '1' : '0',
        category: this.props.training.category_id,
        advancementLevel: this.props.training.advancement_level_id,
        daysPerWeek: this.props.training.days_per_week,
        subtrainings: this.props.training.subtrainings
      })
    }, 800)
  }

  addSubtraining = (e) => {
    this.setState((prevState) => ({
      subtrainings: [...prevState.subtrainings, { name: '', exercises: [] }]
    }))
  }

  addExercise = (index) => {
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      newSubtrainings[index].exercises = [...newSubtrainings[index].exercises, { name: '', rounds: [], category_id: 1 }]
      return { subtrainings: newSubtrainings }
    })
  }

  addRound = (index, indexExercise) => {
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      newSubtrainings[index].exercises[indexExercise].rounds = [...newSubtrainings[index].exercises[indexExercise].rounds, { reps: '', weight: '' }]
      return { subtrainings: newSubtrainings }
    })
  }

  removeSubtraining = (index) => {
    this.setState((prevState) => ({
      subtrainings: prevState.subtrainings.filter((val, i) => i !== index)
    }))
  }

  removeExercise = (index, indexExercise) => {
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      newSubtrainings[index].exercises = newSubtrainings[index].exercises.filter((val, i) => i !== indexExercise)
      return { subtrainings: newSubtrainings }
    })
  }

  removeRound = (index, indexExercise, indexRound) => {
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      newSubtrainings[index].exercises[indexExercise].rounds = newSubtrainings[index].exercises[indexExercise].rounds.filter((val, i) => i !== indexRound)
      return { subtrainings: newSubtrainings }
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleChangeSubtraining = (index, e, type) => {
    const { value } = e.target
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      if (type === 'name') {
        newSubtrainings[index].name = value
      }
      return { subtrainings: newSubtrainings }
    })
  }

  handleChangeExercise = (index, indexExercise, e, type) => {
    const { value } = e.target
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      if (type === 'name') {
        newSubtrainings[index].exercises[indexExercise].name = value
      } else if (type === 'category') {
        newSubtrainings[index].exercises[indexExercise].category_id = Number(value)
      }
      return { subtrainings: newSubtrainings }
    })
  }

  handleChangeRound = (index, indexExercise, indexRound, e, type) => {
    const { value } = e.target
    this.setState(prevState => {
      const newSubtrainings = [...prevState.subtrainings]
      if (type === 'weight') {
        newSubtrainings[index].exercises[indexExercise].rounds[indexRound].weight = value
      } else if (type === 'reps') {
        newSubtrainings[index].exercises[indexExercise].rounds[indexRound].reps = value
      }
      return { subtrainings: newSubtrainings }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.editTraining({
      name: this.state.name,
      description: this.state.description,
      goal: this.state.goal,
      private: this.state.private === '1' ? true : false,
      category: Number(this.state.category),
      advancementLevel: Number(this.state.advancementLevel),
      days_per_week: Number(this.state.daysPerWeek),
      subtrainings: this.state.subtrainings
    }, this.props.match.params.id)
  }

  render() {
    return (
      <>
        <Helmet
          titleTemplate="Edit training"
          defaultTitle="Edit training"
        >
          <meta name="description" content="Edit training" />
        </Helmet>
        <main>
          <section className="section section-shaped section-lg">
            <Container>
              <Row className="mb-4 text-center">
                <Col>
                  <h2 className="display-2">Edit training</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <AvForm
                        onValidSubmit={this.handleSubmit}
                      >
                        <Row className="mb-1">
                          <Col>
                            <h4 className="display-4">Information</h4>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="6">
                            <AvGroup>
                              <Label for="name">Training name *</Label>
                              <AvInput
                                id="name"
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
                          <Col xs="12" md="6">
                            <AvField
                              type="select"
                              label="Training category *"
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

                        <Row>
                          <Col xs="12" md="6">
                            <AvField
                              label="Advancement Level *"
                              type="select"
                              value={this.state.advancementLevel}
                              onChange={this.handleChange}
                              required
                              name="advancementLevel"
                              className="form-control-alternative"
                            >
                              { this.props.advancementLevels.map((advancementLevel) => (
                                <option key={advancementLevel.id} value={advancementLevel.id}>{ advancementLevel.name }</option>
                              )) }
                            </AvField>
                          </Col>
                          <Col xs="12" md="6">
                            <AvField
                              label="Training days weekly *"
                              type="select"
                              value={this.state.daysPerWeek}
                              onChange={this.handleChange}
                              required
                              name="daysPerWeek"
                              className="form-control-alternative"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                            </AvField>
                          </Col>
                        </Row>

                        <AvGroup>
                          <Label for="description">Training description *</Label>
                          <AvInput
                            id="description"
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
                          <Label for="goal">Training goal *</Label>
                          <AvInput
                            id="goal"
                            type="text"
                            name="goal"
                            value={this.state.goal}
                            onChange={this.handleChange}
                            required
                            className="form-control-alternative"
                          />
                          <AvFeedback>Training goal is required</AvFeedback>
                        </AvGroup>

                        <Row className="mb-3">
                          <Col xs="12" md="6">
                            <AvField
                              label="Training status *"
                              type="select"
                              value={this.state.private}
                              onChange={this.handleChange}
                              required
                              name="private"
                              className="form-control-alternative"
                            >
                              <option value={0}>Public</option>
                              <option value={1}>Private</option>
                            </AvField>
                          </Col>
                        </Row>

                        <Row className="border-top pt-3">
                          <Col>
                            <h4 className="display-4">Subtrainings & Exercises</h4>
                          </Col>
                        </Row>

                        <div>
                          {
                            this.state.subtrainings.length === 0 ? (
                              <Row>
                                <Col>
                                  <h5 className="display-5">No subtrainings yet</h5>
                                </Col>
                              </Row>
                            ) : (
                              this.state.subtrainings.map((subtraining, index) => (
                                <>
                                  <Row key={index} className="my-4 border-bottom">
                                    <Col xs="12" md="6">
                                      <AvGroup>
                                        <AvInput
                                          placeholder="Subtraining name"
                                          type="text"
                                          name={`subtraining-${index}`}
                                          value={this.state.subtrainings[index].name}
                                          onChange={e => this.handleChangeSubtraining(index, e, 'name')}
                                          className="form-control-alternative"
                                        />
                                      </AvGroup>
                                    </Col>
                                    <Col md="6" lg="3" className="mb-3">
                                      <Button className="btn-icon btn-block" color="danger" type="button" onClick={() => this.removeSubtraining(index)}>
                                        <span className="btn-inner--icon">
                                          <i className="ni ni-fat-remove" />
                                        </span>
                                        <span className="btn-inner--text">Subtraining</span>
                                      </Button>
                                    </Col>
                                    <Col lg="3" className="mb-3">
                                      <Button className="btn-icon btn-block" color="info" type="button" onClick={() => this.addExercise(index)} disabled={this.state.subtrainings[index].exercises.length >= 10 ? true : false}>
                                        <span className="btn-inner--icon">
                                          <i className="ni ni-fat-add" />
                                        </span>
                                        <span className="btn-inner--text">Exercise</span>
                                      </Button>
                                    </Col>
                                    <Col>
                                      <div>
                                        {
                                          this.state.subtrainings[index].exercises.length === 0 ? (
                                            <Row>
                                              <Col>
                                                <h5 className="display-5">No exercises yet</h5>
                                              </Col>
                                            </Row>
                                          ) : (
                                            this.state.subtrainings[index].exercises.map((exercise, indexExercise) => (
                                              <>
                                                <Row key={indexExercise}>
                                                  <Col md="4">
                                                    <AvGroup>
                                                      <AvInput
                                                        placeholder="Exercise name *"
                                                        type="text"
                                                        name={`exercise-${index}-${indexExercise}`}
                                                        value={this.state.subtrainings[index].exercises[indexExercise].name}
                                                        onChange={e => this.handleChangeExercise(index, indexExercise, e, 'name')}
                                                        required
                                                        className="form-control-alternative"
                                                      />
                                                      <AvFeedback>Exercise name is required</AvFeedback>
                                                    </AvGroup>
                                                  </Col>
                                                  <Col md="4">
                                                    <AvField
                                                      type="select"
                                                      value={this.state.subtrainings[index].exercises[indexExercise].category_id}
                                                      onChange={e => this.handleChangeExercise(index, indexExercise, e, 'category')}
                                                      name="exercise_category"
                                                      className="form-control-alternative"
                                                    >
                                                      { this.props.exerciseCategories.map((exerciseCategory) => (
                                                        <option key={exerciseCategory.id} value={Number(exerciseCategory.id)}>{ exerciseCategory.name }</option>
                                                      )) }
                                                    </AvField>
                                                  </Col>
                                                  <Col md="4" className="mb-3">
                                                    <Button className="btn-icon btn-block" color="danger" type="button" onClick={() => this.removeExercise(index, indexExercise)}>
                                                      <span className="btn-inner--icon">
                                                        <i className="ni ni-fat-remove" />
                                                      </span>
                                                      <span className="btn-inner--text">Exercise</span>
                                                    </Button>
                                                  </Col>
                                                </Row>

                                                <div>
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
                                                                  placeholder="Round weight (kg)"
                                                                  type="number"
                                                                  name={`round-${index}-${indexExercise}-${indexRound}-weight`}
                                                                  value={this.state.subtrainings[index].exercises[indexExercise].rounds[indexRound].weight !== 0 ? this.state.subtrainings[index].exercises[indexExercise].rounds[indexRound].weight : '0'}
                                                                  onChange={e => this.handleChangeRound(index, indexExercise, indexRound, e, 'weight')}
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
                                                                  name={`round-${index}-${indexExercise}-${indexRound}-reps`}
                                                                  value={this.state.subtrainings[index].exercises[indexExercise].rounds[indexRound].reps}
                                                                  onChange={e => this.handleChangeRound(index, indexExercise, indexRound, e, 'reps')}
                                                                  required
                                                                  className="form-control-alternative"
                                                                />
                                                                <AvFeedback>Round reps is required</AvFeedback>
                                                              </AvGroup>
                                                            </Col>
                                                            <Col sm="12" lg="4" className="mb-3">
                                                              <Button className="btn-icon btn-block" color="danger" type="button" onClick={() => this.removeRound(index, indexExercise, indexRound)}>
                                                                <span className="btn-inner--icon">
                                                                  <i className="ni ni-fat-remove" />
                                                                </span>
                                                                <span className="btn-inner--text">Round</span>
                                                              </Button>
                                                            </Col>
                                                          </Row>
                                                        </div>
                                                      ))
                                                    )
                                                  }
                                                  <div className="mb-5">
                                                    <Button type="button" size="sm" color="default" onClick={() => this.addRound(index, indexExercise)} disabled={this.state.subtrainings[index].exercises[indexExercise].rounds.length >= 20 ? true : false}>Add Round</Button>
                                                  </div>
                                                </div>
                                              </>
                                            ))
                                          )
                                        }
                                      </div>
                                    </Col>
                                  </Row>
                                </>
                              ))
                            )
                          }
                        </div>
                        <Row className="my-3">
                          <Col md="6" className="mb-3">
                            <Button className="btn-icon btn-block" color="info" type="button" onClick={() => this.addSubtraining()} disabled={this.state.subtrainings.length >= 10 ? true : false}>
                              <span className="btn-inner--icon">
                                <i className="ni ni-fat-add" />
                              </span>
                              <span className="btn-inner--text">Subtraining</span>
                            </Button>
                          </Col>
                          <Col md="6">
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
  training: state.trainingData.training,
  trainingCategories: state.global.trainingCategories,
  exerciseCategories: state.global.exerciseCategories,
  advancementLevels: state.global.advancementLevels
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  editTraining: (training, id) => dispatch(editTraining(training, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingPage)
