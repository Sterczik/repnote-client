import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import PageHeading from '../../components/PageHeading/PageHeading';

import {
  getTrainings,
  removeTraining,
  switchTrainingStatus,
} from '../App/trainings/actions';

export class TrainingsPage extends React.Component {
  componentDidMount() {
    this.props.getTrainings();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="All trainings"
          defaultTitle="All trainings"
        >
          <meta name="description" content="All trainings" />
        </Helmet>
        <PageHeading title="Trainings" />

        <div>
          {
            this.props.trainings.length === 0 ? (
              <Card className="card">
                <CardContent className="card__content">
                  <Typography variant="title" color="inherit">
                    No trainings
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              this.props.trainings.map((training) => (
                <Card key={training.id} className="card">
                  <CardContent className="card__content">
                    <Typography variant="title" color="primary" className={training.private ? 'card__text card__text--done' : 'card__text'}>
                        { training.name }
                        <span> by </span>
                        { training.user.name }
                    </Typography>

                    <div className="card__icons">
                      <Tooltip title="Delete">
                        <IconButton color="primary" className="card__icon" onClick={() => this.props.removeTraining(training.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="Change Status">
                        <IconButton color="primary" className="card__icon" onClick={() => this.props.switchTrainingStatus(training.id)}>
                          <SwapHorizIcon />
                        </IconButton>
                      </Tooltip> */}
                    </div>
                  </CardContent>
                </Card>
              ))
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  trainings: state.trainings
});

const mapDispatchToProps = (dispatch) => ({
  getTrainings: () => dispatch(getTrainings()),
  removeTraining: (id) => dispatch(removeTraining(id)),
  switchTrainingStatus: (id) => dispatch(switchTrainingStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsPage);
