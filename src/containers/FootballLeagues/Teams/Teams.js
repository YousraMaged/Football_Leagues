import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from './../../../redux/actions';
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
    }

    render() {
        return (
            <div>
                <h4 className="subtitle">{this.props.match.params.name}</h4>
                <League></League>
                <hr></hr>
                <div className="teams">
                    <Team onClick={this.viewTeamDetails} name="Team" rank="40"></Team>
                    <Team onClick={this.viewTeamDetails} name="Team" rank="40"></Team>
                    <Team onClick={this.viewTeamDetails} name="Team" rank="40"></Team>
                    <Team onClick={this.viewTeamDetails} name="Team" rank="40"></Team>
                    <Team onClick={this.viewTeamDetails} name="Team" rank="40"></Team>
                </div>
            </div>
        );;
    }

    viewTeamDetails(league, team) {
        this.props.history.push(`/${league}/${team}`);
    }
}

const mapStateToProps = state => ({
    teams: state.teams
})

export default connect(mapStateToProps, { fetchTeams })(Teams);