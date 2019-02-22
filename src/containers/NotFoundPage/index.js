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

export const NotFoundPage = () => (
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
          <PageHeading title="404" />
          <Button
            component={HeroLink}
            color="secondary"
            to="/"
            size="large"
          >Go home</Button>
        </HeroGhost>
      </Container>
    </StyledHero>
  </React.Fragment>
);

export default NotFoundPage;
