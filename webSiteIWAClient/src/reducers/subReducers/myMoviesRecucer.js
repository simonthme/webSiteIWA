/**
 * Created by simonthome on 23/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_MOVIE_SUCCESS':
      return [
        ...state,
        Object.assign({}, state, action.movie)
      ];
      break;
    case 'FETCH_MY_MOVIE_SUCCESS':
      return action.movie;
      break;
    case 'UPDATE_MOVIE_SUCCESS':
      return [
        ...state.map((movie, idx) => idx === action.id ? action.movie : movie)
      ];
      break;
    case 'DELETE_MOVIE_SUCCESS':
      return [
        ...state.filter((movie, idx) => idx !== action.id)
      ];
      break;
    default:
      return state;
  }
}