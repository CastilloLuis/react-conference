import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../../../components/badge/badge';

import './BadgeDetails.css';

import confLogo from '../../../assets/images/platziconf-logo.svg'

const BadgeDetails = ({ badge }) => {
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div  className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="logo conference react"/>
                        </div>
                        <div className="col-6">
                            <h1 className="BadgeDetails__hero-attendant-name">
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName || 'FIRST_NAME'}
                            lastName={badge.lastName || 'LAST_NAME'}
                            email={badge.email || 'EMAIL'}
                            jobTitle={badge.jobTitle || 'JOB_TITLE'}
                            twitter={badge.twitter || 'TWITTER_USERNAME'}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;

