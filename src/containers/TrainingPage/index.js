import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import HttpsIcon from '@material-ui/icons/Https';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { Main } from '../../assets/styles/core/global/mainContainer';
import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import {
  StyledTraining,
  TrainingSection,
  TrainingExercise,
  TrainingRound
} from '../../assets/styles/components/Training/training';

import {
  StyledCard,
  CardIcons
} from '../../assets/styles/components/Card/card';

import {
  getTraining,
  removeTraining,
  switchTrainingStatus
} from '../App/training/actions';

export class TrainingPage extends React.Component {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.getTraining(this.props.match.params.id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="Training"
          defaultTitle="Training"
        >
          <meta name="description" content="Training" />
        </Helmet>
        
        <Main>
          <Container>
            { this.props.training.id ? (
              <div>
                <StyledCard>
                    <StyledTraining>

                      <TrainingSection>
                        <PageHeading title={ this.props.training.name } subtitle={`By: ${this.props.training.user.name}`} />
                      </TrainingSection>

                      <TrainingSection>
                        <Typography variant="headline" color="inherit" className="text-center">
                          Exercises
                        </Typography>
                        
                        { this.props.training.exercises.map((exercise) => (
                          <TrainingExercise key={exercise.id}>

                            <Typography variant="title" color="inherit" className="text-center">
                              { exercise.name }
                            </Typography>

                            { exercise.rounds.map((round) => (
                              <TrainingRound key={round.id}>
                                <Typography variant="subheading" color="inherit" className="text-center">
                                  Weight: { round.weight } kg
                                </Typography>
                                <Typography variant="subheading" color="inherit" className="text-center">
                                  Reps: { round.reps }
                                </Typography>
                              </TrainingRound>
                            )) }
                          </TrainingExercise>
                        )) }
                      </TrainingSection>
                      
                      { String(this.props.id) === String(this.props.training.user.id) ? (
                        <TrainingSection>
                          <Typography variant="headline" color="inherit" className="text-center">
                            Actions
                          </Typography>
                          <CardIcons>
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
                          </CardIcons>
                        </TrainingSection>
                        ) : null
                      }

                    </StyledTraining>
                </StyledCard>
              </div>
            ) : (
              <div>Loading</div>
            ) }
          </Container>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  training: state.training,
  id: localStorage.getItem('id')
});

const mapDispatchToProps = (dispatch) => ({
  getTraining: (id) => dispatch(getTraining(id)),
  removeTraining: (id) => dispatch(removeTraining(id)),
  switchTrainingStatus: (id) => dispatch(switchTrainingStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);
