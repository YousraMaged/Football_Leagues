import React from 'react';
import ReactDOM from 'react-dom';
import { usePromiseTracker } from "react-promise-tracker";
import * as serviceWorker from './serviceWorker';

import App from './App';
import Loader from './components/UI/Loader/Loader';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        <Loader></Loader>
    );
}

ReactDOM.render(
    <div>
        <App />
        <LoadingIndicator/>
    </div>, document.getElementById('root'));

serviceWorker.unregister();
