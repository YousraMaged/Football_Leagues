import React, { Component } from 'react';
import Team from '../../../components/Team/Team';
class TeamsDetails extends Component {

    render () {
        return (
            <div>
                <h1>{this.props.match.params.name}</h1>
                <h1>{this.props.match.params.team}</h1>
            </div>

        );;
    }
}

export default TeamsDetails;