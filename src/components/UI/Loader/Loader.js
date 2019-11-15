import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Loader.scss';

const loading = (props) => (
    <ProgressBar striped animated variant="info" now={this.props.now} />
);

export default loading;