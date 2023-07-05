import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { display } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { mood, setMood } = props;
  const { dark, setDark } = props;
  const { user, setUser } = props;

  useEffect(() => {
    const isDark = JSON.parse(sessionStorage.getItem("dark"));
    if (isDark !== null) {
      setDark(true);
    }
    

  }, []);

  useEffect(() => {
    sessionStorage.setItem("dark", JSON.stringify(dark));
    console.log(dark);
  }, [dark]);

  const handleModeToggle = () => {
    const newMode = mood.color === "#45505b" ? { color: "#f2f3f5", backgroundColor: "#45505b" } : { color: "#45505b", backgroundColor: "#f2f3f5" };
    setMood(newMode);
    setDark(!dark);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Add job', path: '/add' },
    { label: 'My job', path: `/my-job/${user?._id}` },
  ];
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    axios
      .get('http://localhost:8000/api/users/logout', { withCredentials: true })
      .then((res) => {
        document.location.reload();
        console.log(res);
      }
      )
      .catch((err) => {
        console.log(err);
      }
      );
  }
  const loginClick = () => {
    console.log("loginClick")
    navigate('/logreg')
  }


  return (
    <AppBar position="static" className="navbar" style={mood} >
      <Container maxWidth="xl" style={mood}>
        <Toolbar disableGutters style={mood} className="toolbar"sx={{display:'flex',alignItems:'center',justifyContent:'space-between', width: '90%',margin:'auto'}} >
          <Typography variant="h6" noWrap component={Link} to="/" className="logo">
            <img src="/images/logo.png" alt="CareerHive" className="logo-image" />
            <span className="logo-name" style={mood}>CareerHive</span>
          </Typography>

          <Box className="nav-menu">
            {menuItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} style={mood} className="nav-menu-item text-uppercase ">
                {item.label}
              </Button>
            ))}
          </Box>

          <Box className={`user-menu ${isOpen ? 'open' : ''}`}>
      <AccountCircleIcon className="user-icon" fontSize="large" onClick={toggleDropdown} />
      {isOpen && (
        <div className="dropdown-content">
          <Link >{user ? user.Fname +' ' +user.Lname:'Guest'}</Link>
          {
            user?.role==='admin'?
            <Link to='/admin/jobs'>Pending Jobs</Link>:
            ''
          }
          <Link to='/companycard'>Company details</Link>
          <Link onClick={handleModeToggle} >Switch Mode</Link>
          {
            user?
                <Link onClick={logout}>Logout</Link>:
                <Link to='/logreg'>Login</Link>
          }
          
        </div>
      )}
    </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

