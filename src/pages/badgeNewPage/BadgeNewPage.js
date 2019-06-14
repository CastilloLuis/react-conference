import React, { Component } from 'react';
import background from '../../assets/images/badge-header.svg';
import './BadgeNewPage.css';

import Badge from '../../components/badge/badge';
import BadgeForm from '../../components/badge-form/badgeForm';

export default class BadgePageNew extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        },
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        const { firstName, lastName, email, jobTitle, twitter} = this.state.form;

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={background} alt="stars background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={firstName}
                                lastName={lastName}
                                email={email}
                                jobTitle={jobTitle}
                                twitter={twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}