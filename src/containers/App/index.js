import React from 'react';
import { Helmet } from 'react-helmet';
import { Normalize } from 'styled-normalize';
import { Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'material-ui-snackbar-redux';
import GlobalStyles from '../../assets/styles/core/global/global';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NormalRoute from './NormalRoute';

// Home
import HomePage from '../HomePage/index';

// Auth
import RegisterPage from '../RegisterPage/index';
import LoginPage from '../LoginPage/index';
import RegisterConfirmPage from '../RegisterConfirmPage/index';
import RegisterFailurePage from '../RegisterFailurePage/index';

// Account
import AccountPage from '../AccountPage/index';
import ChangePasswordPage from '../ChangePasswordPage/index';
import ForgotPasswordPage from '../ForgotPasswordPage/index';
import CheckEmail from '../ForgotPasswordPage/CheckEmail';
import ResetPasswordPage from '../ResetPasswordPage/index';

// Training
import TrainingsPage from '../TrainingsPage/index';
import MyTrainingsPage from '../MyTrainingsPage/index';
import TrainingPage from '../TrainingPage/index';
import CreateTrainingPage from '../CreateTrainingPage/index';
import EditTrainingPage from '../EditTrainingPage/index';

// Others
import NotFoundPage from '../NotFoundPage/index';

export default () => (
  <React.Fragment>
    <Normalize />
    <GlobalStyles />
    <div>
      <Helmet
        titleTemplate="App"
        defaultTitle="App"
      >
        <meta name="description" content="App" />
      </Helmet>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500, anchorOrigin: { vertical: 'top', horizontal: 'right' } }} />
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={HomePage}
        />
        <PublicRoute
          path="/register"
          component={RegisterPage}
        />
        <PublicRoute
          path="/register-confirm"
          component={RegisterConfirmPage}
        />
        <PublicRoute
          path="/register-failure"
          component={RegisterFailurePage}
        />
        <PublicRoute
          path="/login"
          component={LoginPage}
        />
        <PrivateRoute
          path="/my-account"
          component={AccountPage}
        />
        <PrivateRoute
          path="/change-password"
          component={ChangePasswordPage}
        />
        <PublicRoute
          path="/forgot-password"
          component={ForgotPasswordPage}
        />
        <PublicRoute
          path="/check-email"
          component={CheckEmail}
        />
        <PublicRoute
          path="/reset-password"
          component={ResetPasswordPage}
        />
        <NormalRoute
          exact
          path="/trainings"
          component={TrainingsPage}
        />
        <NormalRoute
          exact
          path="/trainings/:id"
          component={TrainingPage}
        />
        <PrivateRoute
          path="/my-trainings"
          component={MyTrainingsPage}
        />
        <PrivateRoute
          path="/create-training"
          component={CreateTrainingPage}
        />
        <PrivateRoute
          path="/trainings/:id/edit"
          component={EditTrainingPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </React.Fragment>
);
