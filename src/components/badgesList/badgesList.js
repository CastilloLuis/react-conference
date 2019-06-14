import React from 'react';
import './badgesList.css';
import tw_logo from "../../assets/images/twitter-logo.png";

const BadgesList = (props) => {
    return (
        <ul className="list-unstyled">
            {props.badges.map((badge) => {
                return (
                    <li key={badge.id} className='Badge__section-name-list'>
                        <img src={badge.avatarUrl} className='Badge__avatar-list' alt="badge avatar" />
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
            })}
        </ul>
    )
}

export default BadgesList;

