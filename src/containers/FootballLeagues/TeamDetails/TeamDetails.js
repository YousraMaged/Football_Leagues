import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames, fetchTeam, fetchLeague } from './../../../redux/actions';
import { formatName, generateDate, formatDate, generateScore } from '../../../helpers'

import Team from '../../../components/Team/Team';
import Game from '../../../components/Game/Game';
import './TeamDetails.scss';

class TeamsDetails extends Component {

    componentWillMount() {
        this.props.fetchGames();
        this.props.fetchTeam(this.props.match.params.teamId);
        this.props.fetchLeague(this.props.match.params.leagueId)
    }

    render () {
         // Renders list of games from state
        const games = this.props.games.map(game => (
          <Game
            key={game.id}
            name={this.props.team.name}
            team={game.team}
            score={generateScore()}
            date={formatDate(game.scheduled)}
            scheduled={game.scheduled}
          ></Game>
        ));

        return (
            <div className="teamDetails">
                {this.props.league && this.props.team ?
                    <h4 className="subtitle">{formatName(this.props.league.league_name)} - <span>{this.props.team.name}</span></h4>
                    : null
                }
                <Team name={this.props.team.name} rank={this.props.team.rank}></Team>
                <hr></hr>
                <div className="games">
                    {games}
                </div>
            </div>
        );
    }
}

// called when store changes 
// selects parts of data from store
const mapStateToProps = state => ({
    team: state.team,
    games: state.games,
    league: state.league
})

export default connect(mapStateToProps, { fetchGames, fetchLeague, fetchTeam })(TeamsDetails);