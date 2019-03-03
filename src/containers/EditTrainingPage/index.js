import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { TextValidator } from 'react-material-ui-form-validator';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import HttpsIcon from '@material-ui/icons/Https';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import { Main } from '../../assets/styles/core/global/mainContainer';
import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';

import {
  StyledCard,
  StyledCardContent,
  CardFormTraining,
  CardFormRow,
  CardFormRowCenter,
  CardFormRound,
  CardFormRoundCenter,
  CardIcons
} from '../../assets/styles/components/Card/card';

import {
  getTraining,
  editTraining
} from '../App/training/actions';

export class EditTrainingPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      private: false,
      exercises: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.getTraining(this.props.match.params.id);

    this.setState({
      name: this.props.training.name,
      private: this.props.training.private,
      exercises: this.props.training.exercises
    })
  }

  addExercise = (e) => {
    this.setState((prevState) => ({
      exercises: [...prevState.exercises, { name: '', rounds: [] }],
    }));
  }

  addRound = (index) => {
    this.setState(prevState => {
      const newExercises = [...prevState.exercises];
      newExercises[index].rounds = [...newExercises[index].rounds, { reps: '', weight: '' }];
      return { exercises: newExercises };
    })
  }

  removeExercise = (index) => {
    this.setState((prevState) => ({
      exercises: prevState.exercises.filter((val, i) => i !== index)
    }));
  }

  removeRound = (index, indexRound) => {
    this.setState(prevState => {
      const newExercises = [...prevState.exercises];
      newExercises[index].rounds = newExercises[index].rounds.filter((val, i) => i !== indexRound);
      return { exercises: newExercises };
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleChangeExercise = (index, e) => {
    const { value } = e.target;
    this.setState(prevState => {
      const newExercises = [...prevState.exercises];
      newExercises[index].name = value;
      return { exercises: newExercises };
    })
  }

  handleChangeRound = (index, indexRound, e, type) => {
    const { value } = e.target;
    this.setState(prevState => {
      const newExercises = [...prevState.exercises];
      if (type === 'weight') {
        newExercises[index].rounds[indexRound].weight = value;
      } else if (type === 'reps') {
        newExercises[index].rounds[indexRound].reps = value;
      }
      return { exercises: newExercises };
    })
  }

  changeStatus() {
    this.setState({
      ...this.state,
      private: !this.state.private
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editTraining(this.state, this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="Edit training"
          defaultTitle="Edit training"
        >
          <meta name="description" content="Edit training" />
        </Helmet>

        <Main>
          <Container>
            <PageHeading title="Edit your training" />
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
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  training: state.training
});

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  editTraining: (training, id) => dispatch(editTraining(training, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingPage);
