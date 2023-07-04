    import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

    const JobList = (props) => {
        const navigate = useNavigate();
        const {user,jobData} = props


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
        backgroundColor: '#f2f2f2',
        textAlign: 'left',
    };

    const tdStyle = {
        border: '1px solid #ccc',
        padding: '8px',
    };

    const evenRowStyle = {
        backgroundColor: '#f9f9f9',
    };

    const hoverRowStyle = {
        backgroundColor: '#e9e9e9',
    };

    return (
        <div style={{ marginTop: '1rem' }}>
        <table style={tableStyle}>
            <thead>
            <tr>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Company Name</th>
                <th style={thStyle}>Location</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Publish Date</th>
                <th style={thStyle}>DeadLine</th>
            </tr>
            </thead>
            <tbody>
            {jobData.map((job, index) => (
                <tr
                key={job.id}
                style={index % 2 === 0 ? evenRowStyle : {}}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = hoverRowStyle.backgroundColor;
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = evenRowStyle.backgroundColor;
                }}
                >
                <td onClick={()=>{navigate(`/info/${job._id}`)}} style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.company}</td>
                

                {job.location ? <td onClick={()=>{navigate(`/city/${job.location._id}`)}}  style={tdStyle}>{job.location.location}</td> : <td style={tdStyle}>No Location</td>}
                {job.category ? <td onClick={()=>{navigate(`/category/${job.category._id}`)}}  style={tdStyle}>{job.category.Category}</td> : <td style={tdStyle}>No Category</td>}
                <td style={tdStyle}>{job.createdAt ? new Date(job.createdAt).toLocaleDateString('en-GB', options) : ''}</td>
                <td style={tdStyle}>{job.deadline ? new Date(job.deadline).toLocaleDateString('en-GB', options) : ''}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default JobList;