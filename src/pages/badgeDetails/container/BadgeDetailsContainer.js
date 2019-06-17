import React, { Component } from 'react';

import API from '../../../utils/api';

import BadgeDetails from '../component/badgeDetails';

export default class BadgeDetailsContainer extends Component {

    state = {
        loading: true,
        data: {}
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await API.badges.read(this.props.match.params.badgeId);
        this.setState({loading: false, data});
        console.log(this.state.data)
    }

    render() {
        return (
            <BadgeDetails badge={this.state.data} />
        )
    }
}