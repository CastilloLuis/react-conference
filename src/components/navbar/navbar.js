import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import './navbar.css';

const NavBar = () => {
    return (
        <div className="Navbar">
            <Link to={`${process.env.PUBLIC_URL}/`} className="Navbar__brand">
                <img className="Navbar__brand-logo" src={logo} alt="logo conf"/>
                <span className="light">Platzi</span>
                <span className="bold">Conf</span>
            </Link>
        </div>
    )
};

export default NavBar;

