import React from 'react'
import SearchBox from '../components/Search/SearchBox';
import JobList from '../components/JobList/JobList';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const MyJobs = (props) => {
  const {mood, setMood} = props
  const {dark, setDark} = props
  const {userId} = useParams();
  console.log("Home")
  console.log(props.user)
  const {user} = props
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
      axios
          .get(`http://localhost:8000/api/user/${userId}/jobs`, { withCredentials: true },)
          .then((res) => {
              console.log(res.data);
              setJobData(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);
  return (
    <div style={mood}>
          <SearchBox />

    <h3 className='my-3  text-center'>All Jobs:</h3>
    <JobList jobData={jobData} user={user} dark={dark}/>
  </div>
  )
}

export default MyJobs