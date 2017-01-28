/**
 * Created by simonthome on 28/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NEW_TVSHOW_SUCCESS':
      return action.tvshows;
      break;
    default:
      return state;
  }
};