import React from 'react';
import tw_logo from "../../assets/images/twitter-logo.png";
import Gravatar from '../gravatar/Gravatar';

const BadgeListItem = props => {
    return (
        <li key={props.badge.id} className='Badge__section-name-list'>
            <Gravatar 
                email={props.badge.email}
                alt="avatar conference"
            />
            <div>
                <div>{props.badge.firstName} {props.badge.lastName}</div>
                <div>{props.badge.title}</div>
                <div className="Badge__twitter-section">
                    <img src={tw_logo} className='tw__logo' alt="badge conf twitter logo"/>
                    <span className='twitter__blue_font'>{props.badge.twitter}</span>
                </div>
            </div>
        </li>
    )
}

export default BadgeListItem;

