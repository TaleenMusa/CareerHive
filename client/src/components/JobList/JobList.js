    import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobList.css';

    const JobList = (props) => {
        const navigate = useNavigate();
        const {user,jobData} = props
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
    };

    const tdStyle = {
        border: '1px solid #ccc',
        padding: '8px',
    };

    const evenRowStyle = {
    };

    const hoverRowStyle = {
    };

    return (
        <div style={{ marginTop: '1rem' }}>
        <table style={tableStyle} className={`table table-striped ${!dark? ' table-dark':''}`}>
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
                >
                <td onClick={()=>{navigate(`/info/${job._id}`)}} style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.company}</td>
                

                {job.location ? <td   style={tdStyle}>{job.location.location}</td> : <td style={tdStyle}>No Location</td>}
                {job.category ? <td  style={tdStyle}>{job.category.Category}</td> : <td style={tdStyle}>No Category</td>}
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