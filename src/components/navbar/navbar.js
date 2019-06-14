import React from 'react';
import logo from '../../assets/images/logo.svg';
import './navbar.css';

const NavBar = () => {
    return (
        <div className="Navbar">
            <a className="Navbar__brand" href="/">
                <img className="Navbar__brand-logo" src={logo} alt="logo conf"/>
                <span className="light">Platzi</span>
                <span className="bold">Conf</span>
            </a>
        </div>
    )
};

export default NavBar;

