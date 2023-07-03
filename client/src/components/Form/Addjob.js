    import React, { useState } from 'react';

    const Addjob = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [category, setCategory] = useState('');
    const [requirements, setRequirements] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
        companyName,
        companyLogo,
        jobTitle,
        category,
        requirements,
        jobDescription,
        });
        
        setCompanyName('');
        setCompanyLogo('');
        setJobTitle('');
        setCategory('');
        setRequirements('');
        setJobDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="companyLogo">Company Logo:</label>
            <input
            type="text"
            id="companyLogo"
            value={companyLogo}
            onChange={(e) => setCompanyLogo(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="category">Category:</label>
            <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="requirements">Requirements:</label>
            <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="jobDescription">Job Description:</label>
            <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            />
        </div>
        <button type="submit">Add Job</button>
        </form>
    );
    };

    export default Addjob;
