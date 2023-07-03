    import React, { useState } from 'react';
    import Select from 'react-select';
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';

    const AddJob = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [category, setCategory] = useState('');
    const [requirements, setRequirements] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [area, setArea] = useState('');
    const [deadline, setDeadline] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
        companyName,
        companyLogo,
        jobTitle,
        category,
        requirements,
        jobDescription,
        area,
        deadline,
        });

        setCompanyName('');
        setCompanyLogo('');
        setJobTitle('');
        setCategory('');
        setRequirements('');
        setJobDescription('');
        setArea('');
        setDeadline(null);
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
        <div>
            <label htmlFor="area">Area:</label>
            <Select
            id="area"
            value={area}
            onChange={(selectedOption) => setArea(selectedOption)}
            options={[
                { value: 'area1', label: 'Area 1' },
                { value: 'area2', label: 'Area 2' },
                { value: 'area3', label: 'Area 3' },
            ]}
            />
        </div>
        <div>
            <label htmlFor="deadline">Deadline:</label>
            <DatePicker
            id="deadline"
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            dateFormat="yyyy-MM-dd"
            />
        </div>
        <button type="submit">Add Job</button>
        </form>
    );
    };

    export default AddJob;
