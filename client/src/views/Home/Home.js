import React from 'react'
import JobList from '../../components/JobList/JobList'
import SearchBox from '../../components/Search/SearchBox';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
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

    <h3 className='my-3  text-center'>All Jobs:</h3>
    <JobList jobData={jobData} user={user}/>
  </div>
  )
}

export default Home