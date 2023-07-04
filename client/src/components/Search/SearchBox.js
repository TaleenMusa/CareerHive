    import React from 'react';
    import { Link } from 'react-router-dom';
    import Select from 'react-select';
    import './SearchBox.css';

    const SearchBox = () => {
    const categories = [
        { value: 'category1', label: 'Category 1' },
        { value: 'category2', label: 'Category 2' },
        { value: 'category3', label: 'Category 3' },
    ];

    const areas = [
        { value: 'area1', label: 'Area 1' },
        { value: 'area2', label: 'Area 2' },
        { value: 'area3', label: 'Area 3' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <nav className="searchbox-container">
            
        <div>
            <input type="text" placeholder="Search" className="search-input" />
            <Select options={categories} placeholder="Select Category" className="select-category" />
            <Select options={areas} placeholder="Select Area" className="select-area" />
            <button type="submit" className="search-button">Search</button>
            
        </div>

        </nav>
    );
    };

    export default SearchBox;
