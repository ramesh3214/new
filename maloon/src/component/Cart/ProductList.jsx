import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Cart/productlist.css'; // Import your CSS file
import haircolourImg from '../image/haircolour.png.jpg';
import facialImg from '../image/facial.png.jpg';
import gregImg from '../image/greg.jpg';
import makeupImg from '../image/makeup.jpg';
import pedicureImg from '../image/pedicure.png.jpg';
import Footer from '../Footer';

const ProductList = () => {
    const [filter, setFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFilterMenu = () => {
        const filterMenu = document.getElementById('filterMenu');
        filterMenu.classList.toggle('active');
    };

    const filterItems = (category) => {
        setFilter(prevFilter => (prevFilter === category ? '' : category));
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const products = [
        {
            id: 1,
            image: gregImg,
            category: 'Unisex',
            description: 'Unisex x-y',
        },
        {
            id: 2,
            image: facialImg,
            category: 'Male',
            description: 'Lzone',
        },
        {
            id: 3,
            image: haircolourImg,
            category: 'Unisex',
            description: 'Unisex',
        },
        {
            id: 4,
            image: makeupImg,
            category: 'Male',
            description: 'A1 saloon',
        },
        {
            id: 5,
            image: pedicureImg,
            category: 'Male',
            description: 'Natural',
        },
        {
            id: 6,
            image: haircolourImg,
            category: 'Female',
            description: 'beardo',
        },
        {
            id: 7,
            image: haircolourImg,
            category: 'Unisex',
            description: 'Unisex',
        },
        {
            id: 8,
            image: haircolourImg,
            category: 'Unisex',
            description: 'Unisex',
        },
        {
            id: 9,
            image: haircolourImg,
            category: 'Unisex',
            description: 'Unisex',
        },
        {
            id: 10,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex6',
        },
        {
            id: 11,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex7',
        },
        {
            id: 12,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex8',
        },
        {
            id: 13,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex9',
        },
        {
            id: 14,
            image: haircolourImg,
            category:'Female',
            description: 'Unisex10',
        },
        {
            id: 15,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex',
        },
        {
            id: 16,
            image: haircolourImg,
            category: 'Female',
            description: 'grooming',
        },
        {
            id: 17,
            image: haircolourImg,
            category: 'Female',
            description: 'Unisex6',
        },
        {
            id: 18,
            image: haircolourImg,
            category: 'Male',
            description: 'Unisex3',
        },
        // Product items array here...
    ];

    return (
        <>
        <section className='sl-bg'>
            {/* Search Input */}
            <div className="search-container mt-9">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="search-btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            
            {/* Main Content */}
            <div className="container">
                {/* Sidebar */}
                <div className="sidebar" onClick={toggleFilterMenu}>
                    <button className='fil'>Filter</button>
                    <div className="filter-menu" id="filterMenu">
                        <div className="filter">
                            <button onClick={() => filterItems('Unisex')}>Unisex</button>
                            <button onClick={() => filterItems('Male')}>Male</button>
                            <button onClick={() => filterItems('Female')}>Female</button>
                        </div>
                    </div>
                </div>

                {/* Product Boxes */}
                <div className="content" id="root">
                    {products
                        .filter(item => (!filter || item.category === filter) && (!searchTerm || item.description.toLowerCase().includes(searchTerm.toLowerCase())))
                        .map(item => (
                            <div className="box" key={item.id}>
                                <Link to="/services">
                                    <img src={item.image} alt={`${item.category} product`} />
                                    <div className="description">{item.description}</div>
                                    <div className="rating ml-2">
                                        <i className="fas fa-star"></i>
                                    </div>
                                </Link>
                                {/* Address Box */}
                                <div className="address-box float-right mr-2 mb-8">
                                    <p>123 Main Street, City</p>
                                    <p>Country, Zip Code</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default ProductList;
