import React from 'react';

import './NotFound.css';

import notFound404 from '../../assets/images/404.png'

const NotFound = () => {
    return (
        <div className="NotFound__container">
            <div className="NotFound__hero">
                <img src={notFound404} alt="not found badge conferece"/>
                <span className="bold size-46">Ups!</span>
                <span>No encontramos lo que buscabas</span>
            </div>
        </div>
    )
};

export default NotFound;

