import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './Game.scss';

const team = (props) => (
    <Container className="game box">
    <Row>
        <Col className="player" xs={4} md={4} lg={4}>
            <span>{props.name}</span>
            <img alt="icon" src={require("../../assets/images/team_1.png")} />
        </Col>
        <Col className="center" xs={4} md={4} lg={4}>
                {props.scheduled === "true" ? 
                    <div className="center">
                        <h5 className="result">Scheduled</h5>
                        <span className="date">{props.date}</span>
                    </div> :
                    <div className="center">
                        <h2 className="result">{props.score}</h2>
                    </div>
                }
        </Col>
        <Col className="player" xs={4} md={4} lg={4}>
            <span>{props.team}</span>
            <img alt="icon" src={require("../../assets/images/team_2.png")} />
        </Col>
    </Row>
        <Row>
            <Col className="date" xs={4} md={4} lg={4}>
                <span>{props.date}</span>
            </Col>
        </Row>
    </Container>
);

export default team;