import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Team.scss';

const team = (props) => (
    <Container onClick={() => props.onClick(props.league, props.id)} className="team box">
        <Col xs={6} md={6} lg={4}>
            <img alt="icon" src={require("../../assets/images/team-icon.jpg")} />
        </Col>
        <Col xs={6} md={6} lg={8}>
            <h4>{props.name}</h4>
            <small>World Rank: {props.rank}</small>
        </Col>
    </Container>
);

export default team;