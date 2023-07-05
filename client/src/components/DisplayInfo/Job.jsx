import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Job = (props) => {
  const { job } = props;

  const handleApplyNow = () => {
    window.location.href = job.companyWebsite; // Redirect to the company website
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${job.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={job.image} alt={job.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: '#e5db35',
          color:'black',
        }}
      />
      <Grid container>
      <Grid item md={6}>
  <Box
    sx={{
      position: 'relative',
      p: { xs: 3, md: 6 },
      pr: { md: 0 },
      color:'black'
    }}
  >
    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
      {job.title}
    </Typography>
    <Typography variant="h5" color="inherit" paragraph>
      {job.description}
    </Typography>
    <Typography variant="body1" color="inherit" gutterBottom>
      Requirements: {job.requirements}
    </Typography>
    <Typography variant="body1" color="inherit" gutterBottom>
      Deadline: {job.deadline}
    </Typography>
    <Button variant="contained" onClick={handleApplyNow}>Apply Now</Button>
  </Box>
</Grid>
      </Grid>
    </Paper>
  );
};

Job.propTypes = {
  job: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    companyWebsite: PropTypes.string.isRequired,
  }).isRequired,
};
                       
export default Job;
