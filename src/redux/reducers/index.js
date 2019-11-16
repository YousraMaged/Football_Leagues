import { FETCH_LEAGUES, FETCH_GAMES, FETCH_TEAMS } from '../actions/types';

const initialState = {
  isLoading: false,
  leagues: [],
  teams: [],
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
    case FETCH_TEAMS:
      return {
      ...state,
      teams: action.payload
    }
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload
      }
    default:
      return initialState;
  }
}
