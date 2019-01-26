import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'material-ui-snackbar-redux';
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
import TrainingPage from '../TrainingPage/index';
import CreateTrainingPage from '../CreateTrainingPage/index';

// Others
import NotFoundPage from '../NotFoundPage/index';

export default () => (
  <React.Fragment>
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
        path="/trainings"
        component={TrainingsPage}
      />
      <PublicRoute
        path="/trainings/:id"
        component={TrainingPage}
      />
      <PrivateRoute
        path="/create-training"
        component={CreateTrainingPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </React.Fragment>
);
