import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './../../../redux/actions';
import Team from '../../../components/Team/Team';
import Game from '../../../components/Game/Game';
import './TeamDetails.scss';

class TeamsDetails extends Component {

    componentWillMount() {
        this.props.fetchGames();
    }

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

const mapStateToProps = state => ({
    games: state.games
})

export default connect(mapStateToProps, { fetchGames })(TeamsDetails);