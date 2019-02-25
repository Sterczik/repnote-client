import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { Main } from '../../assets/styles/core/global/mainContainer';
import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

export const AccountPage = ({ logout }) => (
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

        <Button
          component={Link}
          color="primary"
          variant="contained"
          to="/change-password"
        >Change Password</Button>
        <Button type="button" onClick={logout} color="secondary" variant="contained">Logout</Button>
      </Container>
    </Main>
  </React.Fragment>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(undefined, mapDispatchToProps)(AccountPage);
