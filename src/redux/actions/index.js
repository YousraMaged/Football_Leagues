import { FETCH_LEAGUES, FETCH_GAMES, FETCH_TEAMS } from './types';
import { API_KEY, ROOT_URL } from '../../constants';
import axios from 'axios';


export const fetchLeagues = () => dispatch => {
  axios
    .get(`${ROOT_URL}/?met=Leagues&APIkey=${API_KEY}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(res =>
      dispatch({
        type: FETCH_LEAGUES,
        payload: res.data.result
      })
    );
};

export const fetchTeams = () => dispatch => {
  axios
    .get('/db.json')
    .then(res =>
      dispatch({
        type: FETCH_TEAMS,
        payload: res.data.teams
      })
    );
};

export const fetchGames = () => dispatch => {
  axios
    .get('/db.json')
    .then(res =>
      dispatch({
        type: FETCH_GAMES,
        payload: res.data.games
      })
    );
};