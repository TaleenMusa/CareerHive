import React from 'react';
import { Grid } from '@mui/material';
import CompanyInfo from '../../components/DisplayInfo/CompnayInfo';
import Job from '../../components/DisplayInfo/Job';

const Info = () => {
  // Assuming you have the necessary data for the company and job
  const companyData = {
    logo: 'path/to/logo.jpg',
    name: 'Company Name',
    social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
      // Add other social networks as needed
    ],
  };

  const jobData = {
    title: 'Job Title',
    description: 'Job Description',
    image: 'path/to/image.jpg',
    imageText: 'Image Text',
    linkText: 'Read More',
  };

  return (
    <div>
        <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
              <CompanyInfo {...companyData} />
      </Grid>
      <Grid item xs={12} md={6}>
      <Job job={jobData} /> 
      </Grid>
    </Grid>
    </div>
  );
};

export default Info;
