/**
 * Created by simonthome on 12/12/2016.
 */

import {browserHistory} from 'react-router';

export default (state = {}, action) => {
  switch (action.type) {
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case 'CREATE_USER_SUCCESS':
      return Object.assign({}, state, action.user);
      break;
    case 'LOGIN_USER_SUCCESS' :
      console.log('reduser login user' + JSON.stringify(action.user));
      browserHistory.push('/');
      return Object.assign({}, state, action.user);
      break;
    case 'FETCH_USER_SUCCESS':
      return Object.assign({}, state, action.user);
      break;
    case 'UPDATE_USER_SUCCESS':
      return Object.assign({}, state, action.user);
      break;
    case 'DELETE_USER_SUCCESS':
      return Object.assign({}, state, {});
      break;
    default:
      return state;
  }
};