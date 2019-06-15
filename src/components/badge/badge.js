import React from 'react';
import './badge.css';

import confLogo from '../../assets/images/badge-header.svg';

import Gravatar from '../gravatar/Gravatar';

const Badge = props => {
    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt='avatar' />
            </div>

            <div className="Badge__section-name">
                <Gravatar 
                    email={props.email}
                    alt="Avatar"
                />
                <h1>{props.firstName} <br/> {props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{props.jobTitle}</h3>
                <div>@{props.twitter}</div>
            </div>

            <div className="Badge__footer ">
                #Platziconf
            </div>
        </div>
    )
}

export default Badge;