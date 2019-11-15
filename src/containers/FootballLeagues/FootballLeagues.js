import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/UI/Header/Header';
import Leagues from './Leagues/Leagues';
import Teams from './Teams/Teams';
import TeamDetails from './TeamDetails/TeamDetails';
import Container from 'react-bootstrap/Container';
import './FootballLeagues.scss';

class FootballLeagues extends Component {
    render () {
        return (
            <div>
                <Header />
                <Container className="wrapper">
                    <h3 className="title">Football Leagues</h3>
                    <Route exact path="/" exact component={Leagues} />
                    <Route exact path="/:name" component={Teams} />
                    <Route exact path="/:name/:team" component={TeamDetails} />
                </Container>
            </div>
        );
    }
}

export default FootballLeagues;