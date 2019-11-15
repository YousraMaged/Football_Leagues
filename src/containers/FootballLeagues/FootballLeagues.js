import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './FootballLeagues.scss';

import Header from '../../components/UI/Header/Header';
import Leagues from './Leagues/Leagues';
import Teams from './Teams/Teams';
import TeamDetails from './TeamDetails/TeamDetails'

class FootballLeagues extends Component {
    render () {
        return (
            <div>
                <Header />
                <Route path="/" exact component={Leagues} />
                <Route exact path="/:name" component={Teams} />
                <Route exact path="/:name/:team" component={TeamDetails} />
            </div>
        );
    }
}

export default FootballLeagues;