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
    case 'FETCH_MOVIE_SUCCESS':
      action.movie.map(movie => {
        state.push(movie);
      });
      return state;
      break;
    case 'UPDATE_MOVIE_SUCCESS':
      state.filter((movie, index) => index === action.id);
      return [
        ...state,
        Object.assign({}, state,action.movie)
      ];
    default:
      return state;
  }
}