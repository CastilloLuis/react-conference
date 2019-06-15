import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../../utils/api';

import './BadgesPage.css';
import confLogo from '../../assets/images/badge-header.svg';

import BadgesList from '../../components/badgesList/badgesList';
 
export default class BadgesPage extends Component {

    state = {
        loading: true,
        error: null,
        data: [],
    }

    componentDidMount () {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        });
        try {
            const data = await API.badges.list();
            console.log(data);
            this.setState({
                loading: false,
                data: []
            });
            console.log(this.state)
        } catch (e) {
            this.setState({
                loading: false,
                error: e
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="badges container" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList 
                            badges={this.state.data}
                            loading={this.state.loading}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

