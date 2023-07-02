import './NavBar.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuItems = ['Home', 'Add job', 'My job', 'Search', 'Login']; // Define your menu items here

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon className="logo-icon" />
          <Typography variant="h6" noWrap component="a" href="/" className="logo">
            LOGO
          </Typography>

          <Box className="nav-menu-toggle" display={{ xs: 'flex', md: 'none' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className="nav-menu-mobile"
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon className="logo-icon-mobile" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            className="logo-mobile"
          >
            LOGO
          </Typography>
          <Box className="nav-menu-desktop" display={{ xs: 'none', md: 'flex' }}>
            {menuItems.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                className="nav-menu-item"
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box className="user-menu">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className="user-avatar-button">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              className="user-menu-popup"
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
