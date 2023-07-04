    import React, { useEffect, useState } from 'react';
    import Select from 'react-select';
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
    
    const AddJob = (props) => {

        const navigate = useNavigate()
        if(!props.user){
            navigate("/logReg")
        }
    const [locations, setLocations] = useState([])
    const [categories, setCategories] = useState([])
        useEffect(() => {
            axios.get("http://localhost:8000/api/category")
                .then(res => {
                    console.log(res.data)
                    setCategories(res.data)
                })
                .catch(err => console.log(err))
        }, [])

    const {user} = props
    console.log(user)
    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [category, setCategory] = useState('');
    const [requirements, setRequirements] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [area, setArea] = useState('');
    const [deadline, setDeadline] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/locations")
            .then(res => {
                console.log(res.data)
                setLocations(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("submitting")
        console.log({
            companyName,
            companyLogo,
            jobTitle,
            category: category.value,
            requirements,
            jobDescription,
            area,
            deadline,
            userId: user._id,
            locationId: area.value
        })
        axios.post("http://localhost:8000/api/jobs", {
            companyName,
            companyLogo,
            jobTitle,
            category: category.value,
            requirements,
            jobDescription,
            area,
            deadline,
            userId: user._id,
            locationId: area.value
        }, {withCredentials: true})
        .then(res =>{
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))

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
            <label htmlFor="requirements">Requirements:</label>
            <input
            type="text"
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
                    onChange={(selectedOption) => {
                        setArea(selectedOption)
                    }}
                    options={locations.map((location) => {
                        return { value: location._id, label: location.location };
                    })}
                />
        </div>
        <div>
            <label htmlFor="area">Category:</label>
            <Select
                    id="category"
                    value={category}
                    onChange={(selectedOption) => {
                        setCategory(selectedOption)
                    }}
                    options={categories.map((category) => {
                        return { value: category._id, label: category.Category };
                    })}
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
