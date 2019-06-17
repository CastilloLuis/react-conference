import React from 'react';

import { Link } from 'react-router-dom';

import Badge from '../../../components/badge/badge';
import DeleteBadgeModal from '../../../components/deleteBadgeModal/DeleteBadgeModal';

import './BadgeDetails.css';

import confLogo from '../../../assets/images/platziconf-logo.svg'

const BadgeDetails = (props) => {
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
                                {props.firstName} {props.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={props.badge.firstName || 'FIRST_NAME'}
                            lastName={props.badge.lastName || 'LAST_NAME'}
                            email={props.badge.email || 'EMAIL'}
                            jobTitle={props.badge.jobTitle || 'JOB_TITLE'}
                            twitter={props.badge.twitter || 'TWITTER_USERNAME'}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link to={`/badges/${props.badge.id}/edit`} className="btn btn-primary mb-4">
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button 
                                    onClick={props.onOpenModal} 
                                    className="btn btn-danger">
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;

