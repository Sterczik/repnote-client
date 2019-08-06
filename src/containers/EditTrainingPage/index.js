import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

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
      private: false,
      category: 1,
      exercises: []
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.props.getTraining(this.props.match.params.id)

    this.setState({
      name: this.props.training.name,
      description: this.props.training.description,
      goal: this.props.training.goal,
      private: this.props.training.private,
      category: this.props.training.category,
      exercises: this.props.training.exercises
    })
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

  handleChangeExercise = (index, e) => {
    const { value } = e.target
    this.setState(prevState => {
      const newExercises = [...prevState.exercises]
      newExercises[index].name = value
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
    this.props.editTraining(this.state, this.props.match.params.id)
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

        {/* <Main>
          <Container>
            {
              this.state.exercises ? (
                <StyledCard>
                  <StyledCardContent>
                    <CardFormTraining
                      onSubmit={this.handleSubmit}
                    >
                      <CardFormRow>
                        <Typography variant="title" color="inherit" className="text-center">
                          Training name
                        </Typography>

                        <TextValidator
                          name="name"
                          label="Training name"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                          fullWidth
                          validators={['required']}
                          errorMessages={[
                            'Training name is required',
                          ]}
                        />
                      </CardFormRow>
                      <CardFormRow>
                        <Typography variant="title" color="inherit" className="text-center">
                          Training category
                        </Typography>

                        <InputLabel htmlFor="category">Category</InputLabel>
                        <Select
                          native
                          fullWidth
                          value={this.state.category}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'category',
                            id: 'category',
                          }}
                        >
                          <option value={1}>Gym</option>
                          <option value={2}>Calisthenics</option>
                          <option value={3}>Mixed</option>
                        </Select>
                      </CardFormRow>
                      <CardFormRow>
                        <Typography variant="title" color="inherit" className="text-center">
                          Training description
                        </Typography>

                        <TextValidator
                          name="description"
                          label="Training description"
                          type="text"
                          value={this.state.description}
                          onChange={this.handleChange}
                          fullWidth
                          validators={['required']}
                          errorMessages={[
                            'Training description is required',
                          ]}
                        />
                      </CardFormRow>
                      <CardFormRow>
                        <Typography variant="title" color="inherit" className="text-center">
                          Training goal
                        </Typography>

                        <TextValidator
                          name="goal"
                          label="Training goal"
                          type="text"
                          value={this.state.goal}
                          onChange={this.handleChange}
                          fullWidth
                          validators={['required']}
                          errorMessages={[
                            'Training goal is required',
                          ]}
                        />
                      </CardFormRow>
                      <CardFormRowCenter>
                        <Typography variant="title" color="inherit" className="text-center">
                          Training status - {this.state.private ? 'Private' : 'Public'}
                        </Typography>
                        <Tooltip title="Change Status">
                          <IconButton aria-label="Change Status" color="primary" type="submit" className="card__icon" onClick={() => this.changeStatus()}>
                            { this.state.private ? (
                              <HttpsIcon />
                            ) : (
                              <LanguageIcon />
                            )}
                          </IconButton>
                        </Tooltip>
                      </CardFormRowCenter>
                      <CardFormRowCenter>
                        <Typography variant="title" color="inherit" className="text-center">
                          Exercises
                        </Typography>
                      </CardFormRowCenter>
                      <CardFormRow>
                        {
                          this.state.exercises && this.state.exercises.length === 0 ? (
                            <Typography variant="title" color="inherit" className="text-center">
                              No exercises yet
                            </Typography>
                          ) : (
                            this.state.exercises.map((exercise, index) => (
                              <StyledCard key={index}>
                                <StyledCardContent>
                                  <TextValidator
                                    name={`exercise-${index}`}
                                    label="Exercise name"
                                    type="text"
                                    value={this.state.exercises[index].name}
                                    onChange={e => this.handleChangeExercise(index, e)}
                                    fullWidth
                                    validators={['required']}
                                    errorMessages={[
                                      'Exercise name is required'
                                    ]}
                                  />
                                  <CardFormRowCenter>
                                    {
                                      exercise.rounds.length === 0 ? (
                                        null
                                      ) : (
                                        exercise.rounds.map((round, indexRound) => (
                                          <CardFormRound key={indexRound}>
                                            <TextValidator
                                              name={`round-${index}-${indexRound}-weight`}
                                              label="Round weight"
                                              type="number"
                                              value={this.state.exercises[index].rounds[indexRound].weight}
                                              onChange={e => this.handleChangeRound(index, indexRound, e, 'weight')}
                                              fullWidth
                                              validators={['required']}
                                              errorMessages={[
                                                'Round weight is required'
                                              ]}
                                            />
                                            <TextValidator
                                              name={`round-${index}-${indexRound}-reps`}
                                              label="Round reps"
                                              type="number"
                                              value={this.state.exercises[index].rounds[indexRound].reps}
                                              onChange={e => this.handleChangeRound(index, indexRound, e, 'reps')}
                                              fullWidth
                                              validators={['required']}
                                              errorMessages={[
                                                'Round reps is required'
                                              ]}
                                            />
                                            <CardIcons>
                                              <Tooltip title="Delete">
                                                <IconButton color="primary" className="card__icon" onClick={() => this.removeRound(index, indexRound)}>
                                                  <DeleteIcon />
                                                </IconButton>
                                              </Tooltip>
                                            </CardIcons>
                                          </CardFormRound>
                                        ))
                                      )
                                    }
                                    <CardFormRoundCenter>
                                      <Button type="button" color="primary" onClick={() => this.addRound(index)}>Add Round</Button>
                                    </CardFormRoundCenter>
                                  </CardFormRowCenter>
                                  <Button type="button" color="secondary" onClick={() => this.removeExercise(index)}>Remove Exercise</Button>
                                </StyledCardContent>
                              </StyledCard>
                            ))
                          )
                        }
                      </CardFormRow>
                      <CardFormRowCenter>
                        <Button type="button" color="primary" onClick={() => this.addExercise()} disabled={this.state.exercises.length > 9 ? true : false}>Add Exercise</Button>
                      </CardFormRowCenter>
                      <CardFormRowCenter>
                        <Button type="submit" color="secondary">Save training</Button>
                      </CardFormRowCenter>
                    </CardFormTraining>
                  </StyledCardContent>
                </StyledCard>
              ) : null
            }
          </Container>
        </Main> */}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  training: state.training
})

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  editTraining: (training, id) => dispatch(editTraining(training, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingPage)
