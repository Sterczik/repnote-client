import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PersonIcon from '@material-ui/icons/Person';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import {
  StyledFooter,
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterLink,
  StyledBottomNavigation
} from '../../assets/styles/components/Footer/footer';

export const Footer = () => (
  <React.Fragment>
    <MediaQuery minDeviceWidth={1280}>
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
    </MediaQuery>
    <MediaQuery maxDeviceWidth={1280}>
      <StyledBottomNavigation>
        <BottomNavigationAction
          showLabel
          component={Link}
          to="/trainings"
          label="Trainings"
          value="trainings"
          icon={<StarBorderIcon />}
        />
        { isLogged ? (
          <React.Fragment>
            <BottomNavigationAction
              showLabel
              component={Link}
              to="/my-trainings"
              label="My Trainings"
              value="myTrainings"
              icon={<StarIcon />}
            />
            <BottomNavigationAction
              showLabel
              component={Link}
              to="/create-training"
              label="Create"
              value="createTraining"
              icon={<AddOutlinedIcon />}
            />
            <BottomNavigationAction
              showLabel
              component={Link}
              to="/my-account"
              label="Account"
              value="myAccount"
              icon={<PersonIcon />}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <BottomNavigationAction
              showLabel
              component={Link}
              to="/login"
              label="Login"
              value="login"
              icon={<PersonIcon />}
            />
          </React.Fragment>
        ) }
      </StyledBottomNavigation>
    </MediaQuery>
  </React.Fragment>
);

const isLogged = !!localStorage.getItem('token');

export default Footer;
