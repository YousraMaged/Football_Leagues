import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagues } from './../../../redux/actions';
import { formatName } from '../../../helpers'

import League from '../../../components/League/League';
import './Leagues.scss';

class Leagues extends Component {

    componentWillMount() {
        this.props.fetchLeagues();
    }

    render() {
        // Renders list of leagues from state
        const leagueList = this.props.leagues.map(league => (
          <League
            key={league.league_key}
            id={league.league_key}
            name={formatName(league.league_name)}
            games={Math.floor(Math.random() * 250)}
            teams={Math.floor(Math.random() * 100)}
            showDetails={true}
          ></League>
        ));

        return (
            <div>
                {leagueList}
            </div>
        );;
    }
}

// called when store changes 
// selects parts of data from store
const mapStateToProps = state => ({
    leagues: state.leagues
})

export default connect(mapStateToProps, { fetchLeagues })(Leagues);