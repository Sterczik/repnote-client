import React from 'react';
import { Helmet } from 'react-helmet';

import {
  StyledHero,
  HeroGhost
} from '../../assets/styles/components/Hero/hero';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';

export const RegisterConfirmPage = () => (
  <React.Fragment>
    <Helmet
      titleTemplate="Register Confirm"
      defaultTitle="Register Confirm"
    >
      <meta name="description" content="Register Confirm" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost fullWidth={true}>
          <PageHeading
            title="Register Confirm"
            subtitle="Check out your email and confirm your new account. Click confirmation link to continue."
          />
        </HeroGhost>
      </Container>
    </StyledHero>
  </React.Fragment>
);

export default RegisterConfirmPage;
