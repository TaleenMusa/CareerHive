import React from 'react'
import JobList from '../../components/JobList/JobList'
import SearchBox from '../../components/Search/SearchBox';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
const Home = (props) => {
  const {mood, setMood} = props
  const {dark, setDark} = props
  console.log("Home")
  console.log(props.user)
  const {user} = props
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
      axios
          .get('http://localhost:8000/api/jobs')
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

export default Home