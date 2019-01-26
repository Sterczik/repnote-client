import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';

import PageHeading from '../../components/PageHeading/PageHeading';

export class RegisterConfirmPage extends React.Component {
  render() {
    return (
      <div class="container">
        <Helmet
          titleTemplate="Register Confirm Page"
          defaultTitle="Register Confirm Page"
        >
          <meta name="description" content="Register Confirm Page" />
        </Helmet>
        <PageHeading title="Register Confirm" />

        <Typography variant="subheading" color="inherit" class="text-center">
          Check out your email and confirm your new account. Click confirmation link to continue.
        </Typography>
      </div>
    );
  }
}

export default RegisterConfirmPage;
