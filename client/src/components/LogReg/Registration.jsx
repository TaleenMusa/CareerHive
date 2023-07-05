import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Box,
  FormHelperText,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
const defaultTheme = createTheme({
  palette: {
    primary: {main: '#e5db35',},
  },
});

const Registration = () => {
  const [agreed, setAgreed] = useState(false);

  const [formInfo, setFormInfo] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Company: '',
    Bday: '',
    Password: '',
    Cpassword: '',
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formInfo.Fname) {
      formIsValid = false;
      newErrors.Fname = 'First name is required';
    }

    if (!formInfo.Lname) {
      formIsValid = false;
      newErrors.Lname = 'Last name is required';
    }

    if (!formInfo.Email) {
      formIsValid = false;
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formInfo.Email)) {
      formIsValid = false;
      newErrors.Email = 'Email is invalid';
    }


    if (!formInfo.Bday) {
      formIsValid = false;
      newErrors.Bday = 'Birthday is required';
    }

    if (!formInfo.Password) {
      formIsValid = false;
      newErrors.Password = 'Password is required';
    }

    if (!formInfo.Cpassword) {
      formIsValid = false;
      newErrors.Cpassword = 'Confirm Password is required';
    } else if (formInfo.Password !== formInfo.Cpassword) {
      formIsValid = false;
      newErrors.Cpassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post('http://localhost:8000/api/register', formInfo, { withCredentials: true })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            setErrors(res.data.errors);
          } else {
            navigate('/dashboard');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const[isactive,setisactive]=useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Avatar sx={{ m: 1, bgcolor:'primary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={register} sx={{ mt: 3, marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Fname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formInfo.Fname}
                  onChange={changeHandler}
                  error={Boolean(errors.Fname)}
                />
                {errors.Fname && <FormHelperText error>{errors.Fname}</FormHelperText>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="Lname"
                  autoComplete="family-name"
                  value={formInfo.Lname}
                  onChange={changeHandler}
                  error={Boolean(errors.Lname)}
                />
                {errors.Lname && <FormHelperText error>{errors.Lname}</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="Email"
                  autoComplete="email"
                  value={formInfo.Email}
                  onChange={changeHandler}
                  error={Boolean(errors.Email)}
                />
                {errors.Email && <FormHelperText error>{errors.Email}</FormHelperText>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Bday"
                  onFocus={()=>setisactive(true)}
                  onBlur={()=>setisactive(false)}
                  label="Birthday"
                  type={isactive ? 'date' : 'text'}
                  id="birthday"
                  InputProps={{
                    placeholder: '',
                  }}
                  value={formInfo.Bday}
                  onChange={changeHandler}
                  error={Boolean(errors.Bday)}
                />
                {errors.Bday && <FormHelperText error>{errors.Bday}</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formInfo.Password}
                  onChange={changeHandler}
                  error={Boolean(errors.Password)}
                />
                {errors.Password && <FormHelperText error>{errors.Password}</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formInfo.Cpassword}
                  onChange={changeHandler}
                  error={Boolean(errors.Cpassword)}
                />
                {errors.Cpassword && <FormHelperText error>{errors.Cpassword}</FormHelperText>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  color="primary" />}
                  label="I agree to the terms and conditions"
                /> 
              </Grid>
            </Grid>
            <Button disabled={!agreed} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 ,bgcolor: 'primary.main'}}>
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
