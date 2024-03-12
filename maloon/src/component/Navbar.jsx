import React, { useState } from 'react';

import './style/navbar.css';
import { Link, Outlet,NavLink } from 'react-router-dom'; // Import NavLink as well
import img3 from './image/logo2.png'


function Navbar() {
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="home1 ">
                <nav>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="bar1"></div>
                        
                        <div className="bar1"></div>
                        
                        <div className="bar1"></div>
                    </div>
                    <div className="logo ml-4 mt-1 ">
                    <p className='h-14 w-18 text-customGreen '>MalOOn</p>
                    </div>
                    <div className=" font-bold text-customGreen m-2">
                        {/* Update Link to NavLink */}
                        
                        <Link to="AddSaloon">Add Saloon</Link>
                    </div>
                    

                    <div className=" font-bold text-customGreen m-2">
                        {/* Update Link to NavLink */}
                        
                        <Link to="/login">Sign in</Link>
                    </div>
                    <div className=" font-bold text-customGreen m-2">
                        <Link to='AddtoCart'>Cart</Link>
                    </div>

                </nav>
            </header>
            {/* Popup menu */}
            <div className={`popup-menu ${isMenuOpen ? 'open' : ''}`}>
                <span className="close-btn" onClick={toggleMenu}>
                    ×
                </span>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName='active-link'><button>Home</button></NavLink> {/* Update Link to NavLink */}
                    </li>
                    <li>
                        <NavLink to="productlist
                        " activeClassName='active-link'><button>Services</button></NavLink> {/* Update Link to NavLink */}
                    </li>
                    <li>
                        <Link to="/about"><button>About</button></Link>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName='active-link'><button>Contactus</button></NavLink> {/* Update Link to NavLink */}
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
