import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobList.css';
import DeleteButton from '../DeleteButton';

    const Userlist = (props) => {
        const navigate = useNavigate();
        const {user,jobData,setJobData} = props
        const {dark} = props



const options = {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit'
};

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '90%',
        margin: 'auto',
    };

    const thStyle = {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#e5db35',
    };

    const tdStyle = {
        border: '1px solid #ccc',
        padding: '8px',
    };

    const evenRowStyle = {
    };

    const hoverRowStyle = {
    };
    const afterDelete = (id) => {
        const newJobData = jobData.filter((job) => job._id !== id);
        console.log(newJobData);
        setJobData(newJobData);
    };

    return (
        <div style={{ marginTop: '1rem' }}>
        <table style={tableStyle} className={`table table-striped ${!dark? ' table-dark':''}`}>
            <thead>
            <tr>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Publish Date</th>
                <th style={thStyle}>DeadLine</th>
                <th style={thStyle}>Actions</th>

            </tr>
            </thead>
            <tbody>
            {jobData.map((job, index) => (
                <tr
                key={job.id}
                >
                <td onClick={()=>{navigate(`/info/${job._id}`)}} style={tdStyle}>{job.title}</td>
                
                <td style={tdStyle}>{job.createdAt ? new Date(job.createdAt).toLocaleDateString('en-GB', options) : ''}</td>
                <td style={tdStyle}>{job.deadline ? new Date(job.deadline).toLocaleDateString('en-GB', options) : ''}</td>
                <td className='d-flex gap-3 ' style={tdStyle}><button className="btn btn-primary m-0" onClick={()=>{navigate(`/info/${job._id}`)}}>Edit</button>
                <DeleteButton id={job._id} afterDelete={afterDelete} user={user} dark={dark}/>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default Userlist;