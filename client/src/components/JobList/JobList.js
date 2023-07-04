    import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

    const JobList = (props) => {
        const navigate = useNavigate();
        const {user,jobData} = props


    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
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
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Location</th>
                <th style={thStyle}>Publish Date</th>
                <th style={thStyle}>Deadline</th>
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
                <td onClick={()=>{navigate(`/category/${job.category._id}`)}}  style={tdStyle}>{job.category.Category}</td>
                <td onClick={()=>{navigate(`/city/${job.location._id}`)}}  style={tdStyle}>{job.location.location}</td>
                <td style={tdStyle}>{job.createdAt}</td>
                <td style={tdStyle}>{job.deadline}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default JobList;