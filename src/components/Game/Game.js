import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Game.scss';

const team = (props) => (
    <Container className="game box">
    <Row>
        <Col className="player" xs={4} md={4} lg={4}>
            <span>Name</span>
            <img alt="icon" src={require("../../assets/images/team_1.png")} />
        </Col>
        <Col xs={4} md={4} lg={4}>
            <h2 className="result">2:1</h2>
        </Col>
        <Col className="player" xs={4} md={4} lg={4}>
            <span>Name</span>
            <img alt="icon" src={require("../../assets/images/team_2.png")} />
        </Col>
    </Row>
        <Row>
            <Col className="date" xs={4} md={4} lg={4}>
                <span>22 Sept. 2017</span> 
                </Col>
        </Row>
    </Container>
);

export default team;