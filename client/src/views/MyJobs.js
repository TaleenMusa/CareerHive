import React from 'react'
import SearchBox from '../components/Search/SearchBox';
import JobList from '../components/JobList/JobList';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Userlist from '../components/JobList/Userlist';
const MyJobs = (props) => {
  const {mood, dark} = props
  const {userId} = useParams();
  const [loadded, setLoaded] = useState(false);
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
              setLoaded(true);
          })
          .catch((err) => {
              console.log(err);
          });
  }, []);
  
  return (
    <div style={mood}>

    <h3 className='my-3  text-center'>All Jobs:</h3>
    {
      loadded?
      <Userlist jobData={jobData} user={user} dark={dark} setJobData={setJobData}/>
      :
      'Loading...'
    }
  </div>
  )
}

export default MyJobs