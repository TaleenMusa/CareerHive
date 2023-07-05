import React from 'react';
import { Grid } from '@mui/material';
import CompanyInfo from '../../components/DisplayInfo/CompnayInfo';
import Job from '../../components/DisplayInfo/Job';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Info = (props) => {
  const { user } = props;
  const [jobData, setJobData] = useState({});
  const {id} =useParams();
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    console.log(id);
    axios.get(`http://localhost:8000/api/jobs/${id}`).then((res) => {
      console.log(res.data);
      setJobData(res.data);
      setLoaded(true);

    }
    ).catch((err) => console.log(err));
  }, []);


  return (
    <div>
      {
        loaded?
        <Grid container  justifyContent="space-evenly"  spacing={4}>
        <Grid item xs={6} md={4}>
          <CompanyInfo companyData={jobData.company} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Job job={jobData} />
        </Grid>
      </Grid>
      
      :'Loading...'
      }
  </div>
  );
};

export default Info;
