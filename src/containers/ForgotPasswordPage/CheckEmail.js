import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';

import PageHeading from '../../components/PageHeading/PageHeading';

export class CheckEmail extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet
          titleTemplate="Check Email Page"
          defaultTitle="Check Email Page"
        >
          <meta name="description" content="Check Email Page" />
        </Helmet>
        <PageHeading title="Check Email Page" />

        <Typography variant="subheading" color="inherit" className="text-center">
          Check out your email to reset password. Click link to continue.
        </Typography>
      </div>
    );
  }
}

export default CheckEmail;
