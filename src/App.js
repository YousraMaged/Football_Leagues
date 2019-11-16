import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import FootballLeagues from './containers/FootballLeagues/FootballLeagues';
import store from './redux/store';
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
