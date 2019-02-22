import React from 'react';
import Button from '@material-ui/core/Button';
import { Helmet } from 'react-helmet';

import {
  StyledHero,
  HeroGhost,
  HeroLink
} from '../../assets/styles/components/Hero/hero';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';

export const RegisterFailurePage = () => (
  <React.Fragment>
    <Helmet
      titleTemplate="Register Fail"
      defaultTitle="Register Fail"
    >
      <meta name="description" content="Register Fail" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost fullWidth={true} textCenter={true}>
          <PageHeading title="Register Fail" subtitle="Something went wrong. Please try again" />
          <Button
            component={HeroLink}
            color="secondary"
            to="/register"
            size="large"
          >Register again</Button>
        </HeroGhost>
      </Container>
    </StyledHero>
  </React.Fragment>
);

export default RegisterFailurePage;
