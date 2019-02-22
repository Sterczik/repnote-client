import React from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledPageHeading } from '../../assets/styles/components/PageHeading/pageHeading';

const PageHeading = ({ title, subtitle }) => (
  <StyledPageHeading>
    <Typography variant="display2" color="inherit">
      { title }
    </Typography>
    { subtitle ? (
      <Typography variant="subheading" color="inherit">
        { subtitle }
      </Typography>
    ) : null }
  </StyledPageHeading>
);

export default PageHeading;
