    import React, { useEffect, useState } from 'react';
    import Select from 'react-select';
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    // import 'font-awesome/css/font-awesome.min.css';
    import '@fortawesome/fontawesome-free/css/all.min.css';

    import './Addjob.css';

    const AddJob = (props) => {
        const { mood } = props;
    const navigate = useNavigate();
    if (!props.user) {
        navigate('/logReg');
    }

    const [locations, setLocations] = useState([]);
    const [categories, setCategories] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [newRequirement, setNewRequirement] = useState('');

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/category')
        .then((res) => {
            console.log(res.data);
            setCategories(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const { user } = props;
    console.log(user);

    const [jobTitle, setJobTitle] = useState('');
    const [category, setCategory] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [area, setArea] = useState('');
    const [deadline, setDeadline] = useState(null);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/locations')
        .then((res) => {
            console.log(res.data);
            setLocations(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleRequirementChange = (e, index) => {
        const updatedRequirements = [...requirements];
        updatedRequirements[index] = e.target.value;
        setRequirements(updatedRequirements);
    };

    const removeRequirement = (index) => {
        const updatedRequirements = [...requirements];
        updatedRequirements.splice(index, 1);
        setRequirements(updatedRequirements);
    };

    const addRequirement = () => {
        if (newRequirement.trim() !== '') {
        const updatedRequirements = [...requirements, newRequirement];
        setRequirements(updatedRequirements);
        setNewRequirement('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting');
        console.log({
        jobTitle,
        category: category.value,
        requirements,
        jobDescription,
        area,
        deadline,
        userId: user._id,
        locationId: area.value,
        });

        axios
        .post(
            'http://localhost:8000/api/jobs',
            {
            jobTitle,
            category: category.value,
            requirements,
            jobDescription,
            area,
            deadline,
            userId: user._id,
            locationId: area.value,
            },
            { withCredentials: true }
        )
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit} className="add-job-form" style={mood}>
        <div className='box1' style={{ display: 'flex' }}> 
            <label htmlFor="jobTitle">Job Title:</label>
            <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            />

<label htmlFor="category" className='drop'>Category:</label>
            <Select
            id="category"
            value={category}
            onChange={(selectedOption) => {
                setCategory(selectedOption);
            }}
            options={categories.map((category) => {
                return { value: category._id, label: category.Category };
            })}
            />
        </div>


        <div className='box2'style={{ display: 'flex' }}>

        <label htmlFor="deadline">Deadline:</label>
            <DatePicker
            id="deadline"
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            dateFormat="yyyy-MM-dd"
            />

            <label htmlFor="area" className='drop'>Area:</label>
            <Select
            id="area"
            value={area}
            onChange={(selectedOption) => {
                setArea(selectedOption);
            }}
            options={locations.map((location) => {
                return { value: location._id, label: location.location };
            })}
            />

        </div>


        <div>
            <label htmlFor="jobDescription" >Job Description:</label>
            <div>
            <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            />
            </div>
        </div>

        <div>
            
            <div className="requirements-container">
            <label htmlFor="requirements">Requirements:</label>
            {requirements.map((requirement, index) => (
                <div key={index} className="requirement-item">
                <input
                    type="text"
                    value={requirement}
                    onChange={(e) => handleRequirementChange(e, index)}
                />
                <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="remove-requirement"
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                </div>
            ))}
            <div className="add-requirement">
                <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                />
                <button type="button" onClick={addRequirement}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
            </div>
        </div>



        <button type="submit">Add Job</button>
        </form>
    );
    };

    export default AddJob;
