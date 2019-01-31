import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PageHeading from '../../components/PageHeading/PageHeading';

import {
  getMyTrainings
} from '../App/trainings/actions';

export class MyTrainingsPage extends React.Component {
  componentDidMount() {
    this.props.getMyTrainings();
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
                    <PageHeading title={ training.name } subtitle={`By: ${training.user.name}`} />
                    <Typography variant="title" color="primary" className="card__text">
                      <Link to={'/trainings/' + training.id} className="hero__link">Go to training</Link>
                    </Typography>
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
  getMyTrainings: () => dispatch(getMyTrainings())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTrainingsPage);
