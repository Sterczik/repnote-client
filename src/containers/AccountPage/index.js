import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Main } from '../../assets/styles/core/global/mainContainer';
import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

export class AccountPage extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="My Account"
          defaultTitle="My Account"
        >
          <meta name="description" content="My Account" />
        </Helmet>
        <Main>
          <Container>
            <PageHeading title="My Account" />
            { this.props.userInfo ? (
              <Card>
                <CardContent>
                  <PageHeading title={ this.props.userInfo.name } subtitle={ this.props.userInfo.email } />
                </CardContent>
              </Card>
            ) : null }
            <Button
              component={Link}
              color="primary"
              variant="contained"
              to="/change-password"
            >Change Password</Button>
            <Button type="button" onClick={this.props.logout} color="secondary" variant="contained">Logout</Button>
          </Container>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(authActions.getProfile()),
  logout: () => dispatch(authActions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
