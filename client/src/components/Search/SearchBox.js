    import React from 'react';
    import { Link } from 'react-router-dom';
    import Select from 'react-select';

    const Navbar = () => {
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
        <nav>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div>
            <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
            </form>
        </div>
        <div>
            <Select options={categories} placeholder="Select Category" />
            <Select options={areas} placeholder="Select Area" />
        </div>
        </nav>
    );
    };

    export default Navbar;
