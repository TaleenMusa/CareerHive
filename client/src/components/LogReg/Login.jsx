import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { sizing } from '@mui/system';
const Login = (props) => {
  const { user, setUser } = props;
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [errormsg, seterrormsg] = useState(null);
  const navigate = useNavigate();

  if (user) {
    navigate('/');
  }
  const login = (data) => {
    axios
      .post('http://localhost:8000/api/login', data, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data.msg === 'success!') {
          axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
          .then(r => {
            setUser(r.data.user)
            navigate('/');
          })
          .catch(err => console.log(err))
          
        } else {
          seterrormsg(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(login)} noValidate sx={{ mt: 3, marginTop: 8,display: 'flex',flexDirection: 'column',
            
            alignItems: 'center'}}>
              <Grid item xl={12}>
            <TextField
              
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register('Email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('Password', { required: 'Password is required' })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
