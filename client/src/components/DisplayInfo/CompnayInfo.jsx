import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CompanyInfo = (props) => {
  const { logo, name, social = [] } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <img src={logo}  style={{ width: '100%', marginBottom: '1rem' }} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.url}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          {network.name}
        </Link>
      ))}
    </Grid>
  );
};

CompanyInfo.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default CompanyInfo;
