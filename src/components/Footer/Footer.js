import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div>
        <List className="footer__list">
          <ListItem className="footer__item">
            <Link to="/trainings" className="footer__link">Trainings</Link>
          </ListItem>
          <ListItem className="footer__item">
            <Link to="/my-account" className="footer__link">Account</Link>
          </ListItem>
        </List>
      </div>
      <div>2018</div>
    </div>
  </footer>
);

export default Footer;
