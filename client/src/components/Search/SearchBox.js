    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Select from 'react-select';
    import './SearchBox.css';

    const SearchBox = (props) => {
        const {jobData, setJobData} = props;        
        const [search, setSearch] = useState('');
        const [category, setCategory] = useState('');
        const [area, setArea] = useState('');

    const categories= props.categories.map((category, index) => {
        return { value: category._id, label: category.Category };
    });

    const areas = props.locations.map((location, index) => {
        return { value: location._id, label: location.location };
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(
            {
                query: search,
                category: category.value,
                area: area.value,
            }
        );
        const filteredJobs = props.allJobData.filter((job) => {
            const jobCategory = job.category ? job.category._id : null;
            const jobArea = job.location ? job.location._id : null;
        
            return (
                job.title?.toLowerCase().includes(search.toLowerCase()) &&
                (!category || jobCategory === category.value) &&
                (!area || jobArea === area.value)
            );
        });
        setJobData(filteredJobs);

    };
    const showAllJobs = (e) => {
        e.preventDefault();
        setJobData(props.allJobData);
    };


    return (
        <nav className="searchbox-container">
            
        <div>
            <input type="text" placeholder="Search" className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <Select 
            id="category"
            value={category}
            onChange={(selectedOption) => {
                setCategory(selectedOption);
            }}
            options={categories} placeholder="Select Category" className="select-category" />
            <Select
            id="category"
            value={area}
            onChange={(selectedOption) => {
                setArea(selectedOption);
            }}
            options={areas} placeholder="Select Area" className="select-area" />
            <button type="submit" onClick={handleSearch} className="search-button">Filter Jobs</button>
            <button type="submit" onClick={showAllJobs} className="search-button">All Jobs</button>
        </div>

        </nav>
    );
    };

    export default SearchBox;
