import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  TrainingNumbered,
  TrainingUnnumbered
} from '../../assets/styles/components/Training/training';

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
                <Card className="card">
                  <CardContent className="card__content">
                    <PageHeading title={ this.props.training.name } subtitle={`By: ${this.props.training.user.name}`} />

                    <Typography variant="title" color="primary" className="card__text">
                        Ćwiczenia
                    </Typography>
                    <TrainingNumbered>
                    { this.props.training.exercises.map((exercise) => (
                      <React.Fragment key={exercise.id}>
                        <li>{ exercise.name }</li>
                        { exercise.rounds.map((round) => (
                          <TrainingUnnumbered key={round.id}>
                            <li>Weight: { round.weight }</li>
                            <li>Reps: { round.reps }</li>
                          </TrainingUnnumbered>
                        )) }
                      </React.Fragment>
                    )) }
                    </TrainingNumbered>

                    { String(this.props.id) === String(this.props.training.user.id) ? (
                      <div className="card__icons">
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
                      ) : null
                    }
                  </CardContent>
                </Card>
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
