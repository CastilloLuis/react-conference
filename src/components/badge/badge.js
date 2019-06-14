import React from 'react';
import './badge.css';

import confLogo from '../../assets/images/badge-header.svg';

const Badge = props => {
    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt='avatar' />
            </div>

            <div className="Badge__section-name">
                <img className="Badge__avatar" src='https://www.gravatar.com/avatar?d=identicon' alt='avatar' />
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