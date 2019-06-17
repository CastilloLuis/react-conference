import React, { Component } from 'react';

import API from '../../../utils/api';

import BadgeDetails from '../component/badgeDetails';

export default class BadgeDetailsContainer extends Component {

    state = {
        loading: true,
        data: {},
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const data = await API.badges.read(this.props.match.params.badgeId);
        this.setState({loading: false, data});
        console.log(this.state.data)
    }

    handleCloseModal = () => this.setState({modalIsOpen: false});

    handleOpenModal = () => this.setState({modalIsOpen: true});

    handleDeleteBadge = async() => {
        await API.badges.remove(this.props.match.params.badgeId);
        this.props.history.push('/badges');
    }

    render() {
        return (
            <BadgeDetails 
                onCloseModal={this.handleCloseModal} 
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalIsOpen={this.state.modalIsOpen}
                badge={this.state.data} 
            />
        )
    }
}