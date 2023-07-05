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
  const {jobData, setJobData} = props;
  return (
    <div style={mood}>
          

    <h3 className='my-3  text-center'>All Jobs:</h3>
    <JobList jobData={jobData} user={user} dark={dark}/>
  </div>
  )
}

export default Home