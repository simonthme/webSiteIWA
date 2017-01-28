/**
 * Created by simonthome on 27/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EPISODE_SUCCESS':
      return [
        ...state,
        Object.assign({}, state, action.episode)
      ];
      break;
    case 'FETCH_MY_EPISODE_SUCCESS':
      return action.episode;
      break;
    case 'FETCH_MY_EPISODE_ERROR':
      return [];
      break;
    case 'UPDATE_EPISODE_SUCCESS':
      return [
        ...state.map((episode, idx) => idx === action.id ? action.episode : episode)
      ];
      break;
    case 'DELETE_EPISODE_SUCCESS':
      return [
        ...state.filter((episode, idx) => idx !== action.id)
      ];
      break;
    default:
      return state;
  }
}