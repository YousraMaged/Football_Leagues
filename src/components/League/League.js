import React from 'react';
import './League.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const league = props => (
    <Container className="league">
        <Row>
            <Col id="logo" xs={2} md={2} lg={2}>
                <img src={require("../../asstes/images/footbal-icon.jpg")} />
            </Col>
            <Col xs={10} md={10} lg={10}>
                <Row className="content">
                    <Col xs={12} md={12} lg={12}>
                        <h3>Team name</h3>
                    </Col>
                </Row>
                <Row className="content">
                    <Col className="info" xs={2} md={2} lg={2}>
                        <img
                            className="icons"
                            src={require("../../asstes/images/ball.png")}
                        />
                        <span>Icon name</span>
                    </Col>
                    <Col className="info" xs={2} md={2} lg={2}>
                        <img
                            className="icons"
                            src={require("../../asstes/images/player.jpg")}
                        />
                        <span>Icon name</span>
                    </Col>
                    <Col className="align-right" xs={8} md={8} lg={8}>
                        <Button href="/name" variant="link">View Details</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default league;