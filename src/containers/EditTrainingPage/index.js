import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import {
  Button,
  Container,
  Row,
  Col,
  Label,
  UncontrolledTooltip
} from 'reactstrap'

import {
  getTraining,
  editTraining
} from 'store/training/actions'

const reorder = (list, startIndex, endIndex, startDroppable, endDroppable, key) => {
  const result = Array.from(list)
  const [removed] = result[Number(startDroppable)][key].splice(startIndex, 1)
  result[Number(endDroppable)][key].splice(endIndex, 0, removed)

  return result
}

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? '#fcfcfc' : 'white',
  ...draggableStyle
})
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : '#fdfdfd'
})

class EditTrainingPage extends Component {
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
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidMount() {
    this.props.getTraining(this.props.match.params.id)
      .then((status) => {
        if (status) {
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
        }
      })
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

  onDragEnd(result) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    // no changes
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const items = reorder(
      this.state.subtrainings,
      source.index,
      destination.index,
      source.droppableId,
      destination.droppableId,
      'exercises'
    )

    this.setState({
      items
    })
  }

  render() {
    const { t } = this.props
    const helmetContent = t('views.edittrainingpage.helmet.text')
    return (
      <>
        <Helmet
          title={ helmetContent }
          meta={[
            {
              name: 'description',
              content: helmetContent,
            },
          ]}
        />
        <main>
          <section className="section section-shaped section-lg py-3">
            <Container>
              <Row className="mb-4 text-center">
                <Col>
                  <h2 className="display-2">{ t('views.edittrainingpage.headline') }</h2>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <AvForm
                    onValidSubmit={this.handleSubmit}
                  >
                    <Row className="mb-1">
                      <Col>
                        <h4 className="display-4">{ t('views.createedittrainingpage.information') }</h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="6">
                        <AvGroup>
                          <Label for="name">{ t('views.createedittrainingpage.training.name.label') }</Label>
                          <AvInput
                            id="name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                            className="form-control-alternative"
                          />
                          <AvFeedback>{ t('views.createedittrainingpage.training.name.required') }</AvFeedback>
                        </AvGroup>
                      </Col>
                      <Col xs="12" md="6">
                        <AvField
                          type="select"
                          label={ t('views.createedittrainingpage.training.category.label') }
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
                          label={ t('views.createedittrainingpage.training.advancement.label') }
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
                          label={ t('views.createedittrainingpage.training.days.label') }
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
                      <Label for="description">{ t('views.createedittrainingpage.training.description.label') }</Label>
                      <AvInput
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        required
                        className="form-control-alternative"
                        type="textarea"
                      />
                      <AvFeedback>{ t('views.createedittrainingpage.training.description.required') }</AvFeedback>
                    </AvGroup>

                    <AvGroup>
                      <Label for="goal">{ t('views.createedittrainingpage.training.goal.label') }</Label>
                      <AvInput
                        id="goal"
                        type="text"
                        name="goal"
                        value={this.state.goal}
                        onChange={this.handleChange}
                        required
                        className="form-control-alternative"
                      />
                      <AvFeedback>{ t('views.createedittrainingpage.training.goal.required') }</AvFeedback>
                    </AvGroup>

                    <Row className="mb-3">
                      <Col xs="12" md="6">
                        <AvField
                          label={ t('views.createedittrainingpage.training.status.label') }
                          type="select"
                          value={this.state.private}
                          onChange={this.handleChange}
                          required
                          name="private"
                          className="form-control-alternative"
                        >
                          <option value={0}>{ t('components.training.public') }</option>
                          <option value={1}>{ t('components.training.private') }</option>
                        </AvField>
                      </Col>
                    </Row>
                    <Row className="border-top pt-3">
                      <Col>
                        <h4 className="display-4">{ t('views.createedittrainingpage.subtrainingsExercises') }</h4>
                      </Col>
                    </Row>
                    <div>
                      {
                        this.state.subtrainings.length === 0 ? (
                          <Row>
                            <Col>
                              <h5 className="display-5">{ t('views.createedittrainingpage.noSubtrainings') }</h5>
                            </Col>
                          </Row>
                        ) : (
                          <DragDropContext onDragEnd={this.onDragEnd}>
                            { this.state.subtrainings.map((subtraining, index) => (
                              <>
                                <div className="mb-5">
                                  <h5 className="display-5">{ t('views.createedittrainingpage.oneSubtraining') } {index + 1}</h5>
                                  <Row key={index}>
                                    <Col xs="2" className="d-flex align-items-center">
                                      <Button size="sm" id="tooltipAddExercise" className="btn-icon btn-tooltip" color="info" type="button" onClick={() => this.addExercise(index)} disabled={subtraining.exercises.length >= 10 ? true : false}>
                                        <span className="btn-inner--icon">
                                          <i className="ni ni-fat-add" />
                                        </span>
                                      </Button>
                                      <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="tooltipAddExercise"
                                      >
                                        { t('views.createedittrainingpage.addExercise') }
                                      </UncontrolledTooltip>
                                    </Col>
                                    <Col xs="8" className="align-items-center my-2">
                                      <AvGroup className="mb-0">
                                        <AvInput
                                          placeholder={ t('views.createedittrainingpage.subtraining.label') }
                                          type="text"
                                          name={`subtraining-${index}`}
                                          value={subtraining.name}
                                          onChange={e => this.handleChangeSubtraining(index, e, 'name')}
                                          className="form-control-alternative height-28 py-0"
                                        />
                                      </AvGroup>
                                    </Col>
                                    <Col xs="2" className="d-flex align-items-center justify-content-end">
                                      <Button size="sm" id="tooltipRemoveSubtraining" className="btn-icon btn-tooltip" color="danger" type="button" onClick={() => this.removeSubtraining(index)}>
                                        <span className="btn-inner--icon">
                                          <i className="ni ni-fat-remove" />
                                        </span>
                                      </Button>
                                      <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="tooltipRemoveSubtraining"
                                      >
                                        { t('views.createedittrainingpage.removeSubtraining') }
                                      </UncontrolledTooltip>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xs="12">
                                      <Droppable
                                        droppableId={String(index)}
                                      >
                                        {(provided, snapshot) => (
                                          <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                          >
                                            {
                                              subtraining.exercises.length === 0 ? (
                                                <Row>
                                                  <Col>
                                                    <h5 className="display-5">{ t('views.createedittrainingpage.noExercises') }</h5>
                                                  </Col>
                                                </Row>
                                              ) : (
                                                subtraining.exercises.map((exercise, indexExercise) => (
                                                  <Draggable
                                                    key={indexExercise}
                                                    draggableId={`${index}_${indexExercise}`}
                                                    index={indexExercise}
                                                  >
                                                    {(provided, snapshot) => (
                                                      <div ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="pt-3 custom-draggable-item"
                                                        style={getItemStyle(
                                                          snapshot.isDragging,
                                                          provided.draggableProps.style
                                                        )}
                                                      >
                                                        <Row key={indexExercise}>
                                                          <Col md="6">
                                                            <Row className="pb-3">
                                                              <Col md="12">
                                                                <Button size="sm" className="btn-icon" color="danger" type="button" onClick={() => this.removeExercise(index, indexExercise)}>
                                                                  <span className="btn-inner--icon">
                                                                    <i className="ni ni-fat-remove" />
                                                                  </span>
                                                                </Button>
                                                                <span className="pl-2">{ t('views.createedittrainingpage.oneExercise') } {indexExercise + 1}</span>
                                                              </Col>
                                                            </Row>
                                                            <Row>
                                                              <Col md="12">
                                                                <AvGroup>
                                                                  <AvInput
                                                                    placeholder={ t('views.createedittrainingpage.exercise.label') }
                                                                    type="text"
                                                                    name={`exercise-${index}-${indexExercise}`}
                                                                    value={exercise.name}
                                                                    onChange={e => this.handleChangeExercise(index, indexExercise, e, 'name')}
                                                                    required
                                                                    className="form-control-alternative height-28 py-0"
                                                                  />
                                                                  <AvFeedback>{ t('views.createedittrainingpage.exercise.required') }</AvFeedback>
                                                                </AvGroup>
                                                              </Col>
                                                              <Col md="12">
                                                                <AvField
                                                                  type="select"
                                                                  value={exercise.category_id}
                                                                  onChange={e => this.handleChangeExercise(index, indexExercise, e, 'category')}
                                                                  name="exercise_category"
                                                                  className="form-control-alternative height-28 py-0"
                                                                >
                                                                  { this.props.exerciseCategories.map((exerciseCategory) => (
                                                                    <option key={exerciseCategory.id} value={Number(exerciseCategory.id)}>{ exerciseCategory.name }</option>
                                                                  )) }
                                                                </AvField>
                                                              </Col>
                                                            </Row>
                                                          </Col>
                                                          <Col md="6">
                                                            <Row className="pb-3 height-44">
                                                              <Col xs="5">
                                                                { t('views.createedittrainingpage.round.weight') }
                                                              </Col>
                                                              <Col xs="5">
                                                                { t('views.createedittrainingpage.round.reps') }
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
                                                                        <Col xs="5">
                                                                          <AvGroup>
                                                                            <AvInput
                                                                              placeholder={ t('views.createedittrainingpage.round.weightLabel') }
                                                                              type="number"
                                                                              name={`round-${index}-${indexExercise}-${indexRound}-weight`}
                                                                              value={round.weight !== 0 ? round.weight : '0'}
                                                                              onChange={e => this.handleChangeRound(index, indexExercise, indexRound, e, 'weight')}
                                                                              required
                                                                              className="form-control-alternative height-28 py-0"
                                                                            />
                                                                            <AvFeedback>{ t('views.createedittrainingpage.round.weightRequired') }</AvFeedback>
                                                                          </AvGroup>
                                                                        </Col>
                                                                        <Col xs="5">
                                                                          <AvGroup>
                                                                            <AvInput
                                                                              placeholder={ t('views.createedittrainingpage.round.repsLabel') }
                                                                              type="number"
                                                                              name={`round-${index}-${indexExercise}-${indexRound}-reps`}
                                                                              value={round.reps !== 0 ? 
                                                                              round.reps : '0'}
                                                                              onChange={e => this.handleChangeRound(index, indexExercise, indexRound, e, 'reps')}
                                                                              required
                                                                              className="form-control-alternative height-28 py-0"
                                                                            />
                                                                            <AvFeedback>{ t('views.createedittrainingpage.round.repsRequired') }</AvFeedback>
                                                                          </AvGroup>
                                                                        </Col>
                                                                        <Col xs="2" className="mb-3">
                                                                          <Button size="sm" className="btn-icon" color="danger" type="button" onClick={() => this.removeRound(index, indexExercise, indexRound)}>
                                                                            <span className="btn-inner--icon">
                                                                              <i className="ni ni-fat-remove" />
                                                                            </span>
                                                                          </Button>
                                                                        </Col>
                                                                      </Row>
                                                                    </div>
                                                                  ))
                                                                )
                                                              }
                                                              <div className="mb-3">
                                                                <Button type="button" size="sm" color="default" onClick={() => this.addRound(index, indexExercise)} disabled={exercise.rounds.length >= 20 ? true : false}>{ t('views.createedittrainingpage.addRound') }</Button>
                                                              </div>
                                                            </div>
                                                          </Col>
                                                        </Row>
                                                      </div>
                                                    )}
                                                  </Draggable>
                                                ))
                                              )
                                            }
                                            {provided.placeholder}
                                          </div>
                                        )}
                                      </Droppable>
                                    </Col>
                                  </Row>
                                </div>
                              </>
                            )) }
                          </DragDropContext>
                        )
                      }
                    </div>
                    <Row className="my-2">
                      <Col md="6" className="mb-3">
                        <Button size="sm" className="btn-icon btn-block" color="info" type="button" onClick={() => this.addSubtraining()} disabled={this.state.subtrainings.length >= 10 ? true : false}>
                          <span className="btn-inner--text">{ t('views.createedittrainingpage.addSubtraining') }</span>
                        </Button>
                      </Col>
                      <Col md="6">
                        <Button size="sm" className="btn-block" type="submit" color="success">{ t('views.createedittrainingpage.submit') }</Button>
                      </Col>
                    </Row>
                  </AvForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(EditTrainingPage))
