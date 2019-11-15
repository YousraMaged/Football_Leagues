import React, { Component } from 'react';
class Teams extends Component {

    render () {
        return (
            <div>
                <h1>{this.props.match.params.name}</h1>
            </div>

        );;
    }
}

export default Teams;