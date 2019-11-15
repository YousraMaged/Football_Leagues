import React, { Component } from 'react';
import League from '../../../components/League/League';
import Container from 'react-bootstrap/Container';
import './Leagues.scss';

class Leagues extends Component {

    render() {
        return (
            <Container>
                <h3 id="title">Football Leagues</h3>
                <League></League>
            </Container>
        );;
    }
}

export default Leagues;