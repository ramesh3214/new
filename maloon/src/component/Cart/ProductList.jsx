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

    const toggleFilterMenu = () => {
        const filterMenu = document.getElementById('filterMenu');
        filterMenu.classList.toggle('active');
    };

    const filterItems = (category) => {
        setFilter(prevFilter => (prevFilter === category ? '' : category));
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
        // Add more product items here...
    ];

    return (
        <>
        <section className='sl-bg'>
            <div className="container">
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

                <div className="content" id="root">
                    {/* Product Boxes */}
                    {products
                        .filter(item => !filter || item.category === filter)
                        .map(item => (
                            <div className="box" key={item.id}>
                                <Link to="/services"> {/* Link to the product detail page */}
                                    <img src={item.image} alt={`${item.category} product`} />
                                    <div className="description">{item.description}</div>
                                </Link>
                               
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
