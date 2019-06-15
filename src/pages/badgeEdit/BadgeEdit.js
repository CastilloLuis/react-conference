import React, { Component } from 'react';
import background from '../../assets/images/platziconf-logo.svg';
import './BadgeEdit.css';

import API from '../../utils/api';

import Badge from '../../components/badge/badge';
import BadgeForm from '../../components/badge-form/badgeForm';

export default class BadgeEdit extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        },
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.badgeId);
    }

    fetchData = async id => {
        try {
            const data = await API.badges.read(id);
            console.log(data)
            this.setState({form: data});
        } catch (e) {
            console.log(e);
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        try {
            await API.badges.update(this.props.match.params.badgeId, this.state.form);
            this.props.history.push('/badges');
        } catch (e) {
            console.log('error', e)
        }
    }

    render() {
        const { firstName, lastName, email, jobTitle, twitter} = this.state.form;

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img src={background} className="Hero__image" alt="stars background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={firstName || 'FIRST_NAME'}
                                lastName={lastName || 'LAST_NAME'}
                                email={email || 'EMAIL'}
                                jobTitle={jobTitle || 'JOB_TITLE'}
                                twitter={twitter || 'TWITTER_USERNAME'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}