import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FootballLeagues from './containers/FootballLeagues/FootballLeagues'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FootballLeagues></FootballLeagues>
      </div>
    </BrowserRouter>
  );
}

export default App;
