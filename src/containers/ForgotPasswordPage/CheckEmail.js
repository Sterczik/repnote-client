import React from 'react';
import { Helmet } from 'react-helmet';

import {
  StyledHero,
  HeroGhost
} from '../../assets/styles/components/Hero/hero';

import { Container } from '../../assets/styles/core/global/container';
import PageHeading from '../../components/PageHeading/PageHeading';

export const CheckEmail = () => (
  <React.Fragment>
    <Helmet
      titleTemplate="Check email"
      defaultTitle="Check email"
    >
      <meta name="description" content="Check email" />
    </Helmet>
    <StyledHero>
      <Container centerVertically={true}>
        <HeroGhost fullWidth={true}>
          <PageHeading
            title="Check email"
            subtitle="Check out your email to reset password. Click link to continue."
          />
        </HeroGhost>
      </Container>
    </StyledHero>
  </React.Fragment>
);

export default CheckEmail;
