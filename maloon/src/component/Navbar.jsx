import React, { useState } from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import img1 from './image/logo2.png';
import './style/navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="home1">
                <nav>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                        <div className="bar1"></div>
                    </div>

                    <div className="font-bold text-customGreen m-2">
                        <Link to="/login">Sign in</Link>
                    </div>
                    <div className="font-bold text-customGreen">
                        <Link to="AddtoCart">Cart</Link>
                    </div>
                </nav>
            </header>
            <div className={`popup-menu ${isMenuOpen ? 'open' : ''}`}>
                <span className="close-btn" onClick={closeMenu}>
                    ×
                </span>
                <img src={img1} className="h-14 w-18 ml-16 mb-9" alt="#" />
                <ul>
                    <li className="flex">
                        <NavLink to="/" activeClassName="active-link" onClick={closeMenu}>
                            <span className="icon"><i className="fas fa-home"></i></span>
                            <button>Home</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="productlist" activeClassName="active-link" onClick={closeMenu}>
                            <span className="icon"><i className="fas fa-list"></i></span>
                            <button>Services</button>
                        </NavLink>
                    </li>
                    <li className="flex">
                        <Link to="/about" onClick={closeMenu}>
                            <span className="icon"><i className="fas fa-info-circle"></i></span>
                            <button>About</button>
                        </Link>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" activeClassName="active-link" onClick={closeMenu}>
                            <span className="icon"><i className="fas fa-envelope"></i></span>
                            <button>Contact Us</button>
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="#" activeClassName="active-link" onClick={closeMenu}>
                            <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                            <button>Logout</button>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;
