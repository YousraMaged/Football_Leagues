import { FETCH_LEAGUES, FETCH_GAMES, FETCH_TEAMS, FETCH_TEAM, FETCH_LEAGUE } from '../actions/types';

const initialState = {
  isLoading: false,
  leagues: [],
  league: {},
  teams: [],
  team: {},
  games: []
};

export default function(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case FETCH_LEAGUES:
      return {
        ...state,
        leagues: action.payload
      };
    case FETCH_LEAGUE:
      return {
        ...state,
        league: action.payload
      };
    case FETCH_TEAMS:
      return {
      ...state,
      teams: action.payload
    };
    case FETCH_TEAM:
      return {
      ...state,
      team: action.payload
    };
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload
      }
    default:
      return initialState;
  }
}
