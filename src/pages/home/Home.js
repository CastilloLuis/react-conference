import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import confLogo from '../../assets/images/platziconf-logo.svg';
import astronauts from '../../assets/images/astronauts.svg'

const Home = () => {
    return (
        <div className="Home__container">
            <div className="Home__conference-description">
                <img src={confLogo} alt="conference react logo"/>
                <h1>Badge Management <br/> System</h1>
                <Link to={`${process.env.PUBLIC_URL}/badges`} className="btn btn-primary btn-sm">
                    <span className="bold">Start</span>
                </Link>
            </div>
            <img className="Home__astronauts" src={astronauts} alt="astronauts conference react logo"/>
        </div>
    )
}

export default Home;

