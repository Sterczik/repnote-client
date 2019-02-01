import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import HttpsIcon from '@material-ui/icons/Https';
import LanguageIcon from '@material-ui/icons/Language';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import PageHeading from '../../components/PageHeading/PageHeading';

import {
  getTraining,
  editTraining
} from '../App/training/actions';

export class EditTrainingPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      private: '',
      exercises: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      name: nextProps.training.name,
      private: nextProps.training.private,
      exercises: nextProps.training.exercises
    };
  }

  componentDidMount() {
    this.props.getTraining(this.props.match.params.id);
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
    this.props.editTraining(this.state);
  }

  render() {
    return (
      <div>
        <Helmet
          titleTemplate="Register"
          defaultTitle="Register"
        >
          <meta name="description" content="Register" />
        </Helmet>
        <PageHeading title="Edit your training" />
        {
          this.state.exercises ? (
            <Card className="card">
              <CardContent className="card__content">
                <ValidatorForm
                  className="card__form--training"
                  onSubmit={this.handleSubmit}
                >
                  <div className="card__form__row">
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
                  </div>
                  <div className="card__form__row card__form__row--center">
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
                  </div>
                  <div className="card__form__row card__form__row--center">
                    <Typography variant="title" color="inherit" className="text-center">
                      Exercises
                    </Typography>
                  </div>
                  <div className="card__form__row">
                    {
                      this.state.exercises && this.state.exercises.length === 0 ? (
                        <Typography variant="title" color="inherit" className="text-center">
                          No exercises yet
                        </Typography>
                      ) : (
                        this.state.exercises.map((exercise, index) => (
                          <Card key={index} className="card">
                            <CardContent className="card__content">
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
                              <div className="card__form__row card__form__row--center">
                                {
                                  exercise.rounds.length === 0 ? (
                                    null
                                  ) : (
                                    exercise.rounds.map((round, indexRound) => (
                                      <div key={indexRound} className="card__form__round">
                                        <TextValidator
                                          name={`round-${index}-weight`}
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
                                          name={`round-${index}-reps`}
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
                                        <div className="card__icons">
                                          <Tooltip title="Delete">
                                            <IconButton color="primary" className="card__icon" onClick={() => this.removeRound(index, indexRound)}>
                                              <DeleteIcon />
                                            </IconButton>
                                          </Tooltip>
                                        </div>
                                      </div>
                                    ))
                                  )
                                }
                                <div className="card__form__round card__form__round--center">
                                  <Button type="button" color="primary" onClick={() => this.addRound(index)}>Add Round</Button>
                                </div>
                              </div>
                              <Button type="button" color="secondary" onClick={() => this.removeExercise(index)}>Remove Exercise</Button>
                            </CardContent>
                          </Card>
                        ))
                      )
                    }
                  </div>
                  <div className="card__form__row card__form__row--center card__form__row--no-margin">
                    <Tooltip title="Add Exercise">
                      <IconButton aria-label="Add Exercise" color="primary" type="submit" className="card__icon" onClick={() => this.addExercise()}>
                        <AddCircleIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <div className="card__form__row card__form__row--center">
                    <Button type="submit" color="secondary">Save training</Button>
                  </div>
                </ValidatorForm>
              </CardContent>
            </Card>
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  training: state.training
});

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  editTraining: (training) => dispatch(editTraining(training))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingPage);
