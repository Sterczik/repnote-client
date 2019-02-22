import React from 'react';
import {
  StyledFooter,
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterLink
} from '../../assets/styles/components/Footer/footer';

export const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <div>
        <FooterList>
          <FooterListItem>
            <FooterLink to="/trainings">Trainings</FooterLink>
          </FooterListItem>
          <FooterListItem>
            <FooterLink to="/my-account">Account</FooterLink>
          </FooterListItem>
        </FooterList>
      </div>
      <div>2018</div>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
