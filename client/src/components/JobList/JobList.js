    import React from 'react';

    const JobList = () => {
    const jobData = [
        {
        id: 1,
        title: 'Job Title 1',
        category: 'Category 1',
        location: 'Location 1',
        publishDate: '2023-07-01',
        deadline: '2023-07-15',
        },
        {
        id: 2,
        title: 'Job Title 2',
        category: 'Category 2',
        location: 'Location 2',
        publishDate: '2023-07-02',
        deadline: '2023-07-16',
        },
        // Add more job objects as needed
    ];

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
                <td style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.category}</td>
                <td style={tdStyle}>{job.location}</td>
                <td style={tdStyle}>{job.publishDate}</td>
                <td style={tdStyle}>{job.deadline}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default JobList;
