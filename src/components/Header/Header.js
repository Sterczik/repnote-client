import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { StyledHeader, HeaderTypo, HeaderLink } from '../../assets/styles/components/Header/header';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../containers/App/auth/actions';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  logout() {
    this.handleClose();
    this.props.logout();
  }

  render() {
    return (
      <StyledHeader>
        <AppBar position="static">
          <Toolbar>
            <HeaderTypo variant="headline" color="inherit">
              <HeaderLink to="/trainings">
                RepNote
              </HeaderLink>
            </HeaderTypo>
            <IconButton
              aria-owns={this.state.anchorEl ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              {
                this.props.isAuthenticated ? (
                  <div>
                    <MenuItem component={Link} to="/trainings">Trainings</MenuItem>
                    <MenuItem component={Link} to="/my-trainings">My trainings</MenuItem>
                    <MenuItem component={Link} to="/create-training">Create Training</MenuItem>
                    <MenuItem component={Link} to="/my-account">My account</MenuItem>
                    <MenuItem onClick={this.logout}>Logout</MenuItem>
                  </div>
                ) : (
                  <MenuItem component={Link} to="/login">Login</MenuItem>
                )
              }
            </Menu>
          </Toolbar>
        </AppBar>
      </StyledHeader>
    );
  }
}

const mapStateToProps = () => ({
  isAuthenticated: !!localStorage.getItem('token')
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(authActions.logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
