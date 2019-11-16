import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, fetchLeague } from './../../../redux/actions';
import { formatName } from '../../../helpers'

import League from '../../../components/League/League';
import Team from '../../../components/Team/Team';
import './Teams.scss';

class Teams extends Component {

    constructor(props) {
        super(props);
        this.viewTeamDetails = this.viewTeamDetails.bind(this);
    }

    componentDidMount() {
        this.props.fetchTeams();
        this.props.fetchLeague(this.props.match.params.id);
    }
    
    render() {
        const teamsList = this.props.teams.map(team => (
            <Team
                key={team.id}
                id={team.id}
                name={team.name}
                rank={team.rank}
                onClick={this.viewTeamDetails}
                league={this.props.match.params.id}
            ></Team>
        ));

        return (
            <div>
                {this.props.league ?
                    <div>
                        <h4 className="subtitle">{formatName(this.props.league.league_name)}</h4>
                        <League
                            key={this.props.league.league_key}
                            name={formatName(this.props.league.league_name)}
                            games={Math.floor(Math.random() * 250)}
                            teams={Math.floor(Math.random() * 100)}
                            showDetails={false}>
                        </League>
                    </div>
                    : null
                }
                <hr></hr>
                <div className="teams">
                    {teamsList}
                </div>
            </div>
        );
    }

    viewTeamDetails(league, team) {
        this.props.history.push(`/${league}/${team}`);
    }

}

const mapStateToProps = state => ({
    teams: state.teams,
    league: state.league
})

export default connect(mapStateToProps, { fetchTeams, fetchLeague })(Teams);