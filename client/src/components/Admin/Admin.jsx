import axios from 'axios';
import React from 'react';

const Admin = (props) => {
  const { jobData } = props;
  const { mood } = props;
  console.log(jobData);
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

  const handleAccept = (jobId) => {
    // Implement the logic for accepting a job with the given jobId
    console.log(`Accept job with ID ${jobId}`);
    axios
    .put(`http://localhost:8000/api/jobs/${jobId}`, {status: "approved"})
    .then((res) => {
        console.log(res.data);
    }
    )
    .catch((err) => {
        console.log(err);
    }
    );
  };

  const handleDecline = (jobId) => {
    // Implement the logic for declining a job with the given jobId
    console.log(`Decline job with ID ${jobId}`);
    axios
    .put(`http://localhost:8000/api/jobs/${jobId}`, {status: "declined"})
    .then((res) => {
        console.log(res.data);
    }
    )
    .catch((err) => {
        console.log(err);
    }
    );
  };

  return (
    <div style={mood}>
      <div style={{ marginTop: '1rem' }}>
        <h3>Pending jobs</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Publish Date</th>
              <th style={thStyle}>Deadline</th>
              <th style={thStyle}>Actions</th> {/* New column for accept/decline options */}
            </tr>
          </thead>
          <tbody>
          {jobData.map((job, index) => (
              <tr
                key={job._id}
              >
                <td style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.category.Category}</td>
                <td style={tdStyle}>{job.location.location}</td>
                <td style={tdStyle}>{job.createdAt}</td>
                <td style={tdStyle}>{job.deadline}</td>
                <td style={tdStyle}>
                <button onClick={() => handleAccept(job._id)}>Accept</button>
                <button onClick={() => handleDecline(job._id)}>Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
