import React from 'react';
import Button from '@material-ui/core/Button';

import {
  StyledHero,
  HeroContainer,
  HeroText,
  HeroLink,
  HeroHeading,
  HeroHeadingMain,
  HeroHeadingSub,
  HeroLinks
} from '../../assets/styles/components/Hero/hero';

const Hero = () => (
  <StyledHero>
    <HeroContainer>
      <HeroText>
        <HeroHeading>
          <HeroHeadingMain>RepNote</HeroHeadingMain>
          <HeroHeadingSub>Create your trainings and share them with people.</HeroHeadingSub>
        </HeroHeading>
        <HeroLinks>
          <Button
            component={HeroLink}
            color="default"
            variant="contained"
            to="/login"
            size="large"
          >Login</Button>
          <Button
            component={HeroLink}
            color="default"
            variant="contained"
            to="/register"
            size="large"
          >Register</Button>
        </HeroLinks>
      </HeroText>
    </HeroContainer>
  </StyledHero>
);

export default Hero;
