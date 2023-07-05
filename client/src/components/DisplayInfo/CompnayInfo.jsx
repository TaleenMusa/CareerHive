import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CompanyInfo = (props) => {
  const {companyData}  = props;
  const {logo, name, social} = companyData;
  console.log(companyData);
  return (
    <Grid  item xs={12} md={6}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'grey.200' }}>
        <img src={logo}  style={{ width: '100%', marginBottom: '1rem' }} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network}
          key={network}
          sx={{ mb: 0.5 }}
        >
          {network}
        </Link>
      ))}
            </Paper>
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
