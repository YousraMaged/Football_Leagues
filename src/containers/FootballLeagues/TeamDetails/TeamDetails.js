import React, { Component } from 'react';
import Team from '../../../components/Team/Team';
import Game from '../../../components/Game/Game';
import './TeamDetails.scss';

class TeamsDetails extends Component {

    render () {
        return (
            <div className="teamDetails">
                <h4 className="subtitle">League: <span>Team</span></h4>
                <Team name="Team" rank="1200"></Team>
                <hr></hr>
                <div className="games">
                <Game name="Hamada" opponent="Ai 7aga"></Game>
                <Game name="Hamada" opponent="Ai 7aga"></Game>
                <Game name="Hamada" opponent="Ai 7aga"></Game>
                </div>
            </div>

        );;
    }
}

export default TeamsDetails;