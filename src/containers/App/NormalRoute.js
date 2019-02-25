import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { MainContainer } from '../../assets/styles/core/global/mainContainer';

export const NormalRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => (
      <MainContainer>
        <Header />
        <Component {...props} />
        <Footer />
      </MainContainer>
    )}
  />
);

export default NormalRoute;