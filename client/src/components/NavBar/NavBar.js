import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Add job', path: '/add-job' },
    { label: 'My job', path: '/my-job' },
  ];

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Typography variant="h6" noWrap component={Link} to="/" className="logo">
            <img src="/images/logo.png" alt="CareerHive" className="logo-image" />
            <span className="logo-name">CareerHive</span>
          </Typography>

          <Box className="nav-menu">
            {menuItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} className="nav-menu-item">
                {item.label}
              </Button>
            ))}
          </Box>

          <Box className="search-box">
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <SearchIcon className="search-icon" />,
              }}
            />
          </Box>

          <Box className="user-menu">
            <AccountCircleIcon className="user-icon" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
