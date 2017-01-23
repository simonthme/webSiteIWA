/**
 * Created by simonthome on 23/01/2017.
 */

import {browserHistory} from 'react-router';

let initialState = {
  local: !!localStorage.token
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IS_AUTH':

      console.log(!!localStorage.token);
      return !!localStorage.token;
      break;
    case 'LOGOUT_USER':
      browserHistory.push('/');
      return !!localStorage.token;
    default:
      return state;
  }
}