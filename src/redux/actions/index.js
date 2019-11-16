import { FETCH_LEAGUES, FETCH_LEAGUE, FETCH_GAMES, FETCH_TEAMS, FETCH_TEAM } from './types';
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

export const fetchLeague = (id) => dispatch => {
  axios
    .get(`${ROOT_URL}/?met=Leagues&APIkey=${API_KEY}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(res =>
      dispatch({
        type: FETCH_LEAGUE,
        value: id,
        payload: res.data.result.filter((league) => league.league_key == id)[0]
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


export const fetchTeam = (id) => dispatch => {
  axios
    .get('/db.json')
    .then(res =>
      dispatch({
        type: FETCH_TEAM,
        payload: res.data.teams.filter((team) => team.id == id)[0]
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