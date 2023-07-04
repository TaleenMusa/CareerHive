import React from 'react'
import JobList from '../../components/JobList/JobList'
import SearchBox from '../../components/Search/SearchBox';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Home = (props) => {
  console.log("Home")
  console.log(props.user)
  const {user} = props
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
      axios
          .get('http://localhost:8000/api/jobs')
          .then((res) => {
              setJobData(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);
  return (
    <div>
          <SearchBox />

    <h1>All Jobs</h1>
    <JobList jobData={jobData} user={user}/>
  </div>
  )
}

export default Home