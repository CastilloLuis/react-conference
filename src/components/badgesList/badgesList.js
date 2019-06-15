import React from 'react';
import { Link } from 'react-router-dom';

import './badgesList.css';
import './badgesListSkeletons.css';

import BadgesListItem from './badgeListItem';
import EmptyList from '../empty/emptyList';

const BadgesList = (props) => {
    if(!props.loading) {
        if(props.badges.length > 0) {
            return (
                <ul className="list-unstyled">
                    {props.badges.map((badge) => {
                        return (
                            <Link 
                                className="text-reset text-decoration-none"
                                to={`/badges/${badge.id}/edit`}
                            >
                                <BadgesListItem 
                                    badge={badge}
                                />
                            </Link>
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

