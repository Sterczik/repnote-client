import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { MainContainer } from '../../assets/styles/core/global/mainContainer';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      isAuthenticated ? (
        <MainContainer>
          <Header />
          <Component {...props} />
          <Footer />
        </MainContainer>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    )}
  />
);

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
});

export default connect(mapStateToProps)(PrivateRoute);
