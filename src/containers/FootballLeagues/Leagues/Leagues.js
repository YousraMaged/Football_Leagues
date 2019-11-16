import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagues } from './../../../redux/actions';
import League from '../../../components/League/League';
import './Leagues.scss';

class Leagues extends Component {

    componentWillMount() {
        this.props.fetchLeagues();
    }

    render() {
        const leagueList = this.props.leagues.map(league => (
            <League key={league.league_key} 
            name={this.formatName(league.league_name)} 
            games={Math.floor(Math.random() * 250)} 
            teams={Math.floor(Math.random() * 100)}></League>
        ));
        return (
            <div>
                {leagueList}
            </div>
        );;
    }

    formatName(name) {
        return name.substr(name.indexOf('.') + 2)
    }
}

const mapStateToProps = state => ({
    leagues: state.leagues
})

export default connect(mapStateToProps, { fetchLeagues })(Leagues);