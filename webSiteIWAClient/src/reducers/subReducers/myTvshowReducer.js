/**
 * Created by simonthome on 27/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TVSHOW_SUCCESS':
      return [
        ...state,
        Object.assign({}, state, action.tvshow)
      ];
      break;
    case 'FETCH_MY_TVSHOW_SUCCESS':
      return action.tvshow;
      break;
    case 'UPDATE_TVSHOW_SUCCESS':
      return [
        ...state.map((tvshow, idx) => idx === action.id ? action.tvshow : tvshow)
      ];
      break;
    case 'DELETE_TVSHOW_SUCCESS':
      return [
        ...state.filter((tvshow, idx) => idx !== action.id)
      ];
      break;
    default:
      return state;
  }
}