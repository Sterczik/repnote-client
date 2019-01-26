import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export const NormalRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      <React.Fragment>
        <Header />
        <Component {...props} />
        <Footer />
      </React.Fragment>
    )}
  />
);

export default NormalRoute;