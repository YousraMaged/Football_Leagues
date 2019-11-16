import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import FootballLeagues from './containers/FootballLeagues/FootballLeagues';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <FootballLeagues></FootballLeagues>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
