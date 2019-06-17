import React from 'react';
import { Link } from 'react-router-dom';

import './badgesList.css';
import './badgesListSkeletons.css';

import BadgesListItem from './badgeListItem';
import EmptyList from '../empty/emptyList';
import BadgeSearchFilter from '../../components/badgesList/BadgeSearchFilter';

const BadgesList = (props) => {
    if(!props.loading) {
        const [filteredBadges, setFilteredBadges] = React.useState(props.badges);
        return (
            <React.Fragment>
                <BadgeSearchFilter
                    badges={props.badges}
                    onChange={(filteredBadges) => setFilteredBadges(filteredBadges)}
                />

                {
                    filteredBadges.length > 0 ?
                        (
                                <ul className="list-unstyled">
                                    {filteredBadges.map((badge) => {
                                        return (
                                            <Link 
                                                key={badge.id}
                                                className="text-reset text-decoration-none"
                                                to={`/badges/${badge.id}`}
                                            >
                                                <BadgesListItem 
                                                    badge={badge}
                                                />
                                            </Link>
                                        )
                                    }).reverse()}
                                </ul>
                        )            
                    :
                        (<EmptyList />)
                    
                }

            </React.Fragment>
        )

    } else {
        return (<div className="demo"></div>)
    }

    
}

export default BadgesList;

