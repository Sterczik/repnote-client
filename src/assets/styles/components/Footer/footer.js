import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import { Container } from '../../core/global/container';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const StyledFooter = styled.div`
  background: #3f51b5;
  color: #fff;
`

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`

const FooterList = styled(List)`
  display: flex;
  align-items: center;
`

const FooterListItem = styled(ListItem)`
  display: inline-block;
  padding: 0;
  width: auto;
`

const FooterLink = styled(Link)`
  color: #fff;
  padding: 8px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;
  text-decoration: none;
  position: relative;
  display: block;
`

const StyledBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
`

export {
  StyledFooter,
  FooterContainer,
  FooterList,
  FooterListItem,
  FooterLink,
  StyledBottomNavigation
}