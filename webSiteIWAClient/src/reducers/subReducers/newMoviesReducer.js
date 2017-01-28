/**
 * Created by simonthome on 27/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEW_MOVIE_SUCCESS':
      return action.movie;
      break;
    default:
      return state;
  }
};