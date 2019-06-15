import React from 'react';
import './badgesList.css';
import './badgesListSkeletons.css';

import tw_logo from "../../assets/images/twitter-logo.png";

import EmptyList from '../empty/emptyList';
import Gravatar from '../gravatar/Gravatar';

const BadgesList = (props) => {
    if(!props.loading) {
        if(props.badges.length > 0) {
            return (
                <ul className="list-unstyled">
                    {props.badges.map((badge) => {
                        return (
                            <li key={badge.id} className='Badge__section-name-list'>
                                <Gravatar 
                                    email={badge.email}
                                    alt="avatar conference"
                                />
                                <div>
                                    <div>{badge.firstName} {badge.lastName}</div>
                                    <div>{badge.title}</div>
                                    <div className="Badge__twitter-section">
                                        <img src={tw_logo} className='tw__logo' alt="badge conf twitter logo"/>
                                        <span className='twitter__blue_font'>{badge.twitter}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    }).reverse()}
                </ul>
            )            
        } else {
            return (<EmptyList />)
        }

    } else {
        return (<div className="demo"></div>)
    }

    
}

export default BadgesList;

