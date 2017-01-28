/**
 * Created by simonthome on 12/12/2016.
 */

import Axios from 'axios';
import actionTypes from './actionTypes';
import config from '../../assets/config';

const head = {
  headers : {
    'Authorization' : localStorage.token
  }
};

export const createUserSuccess = (user) => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user: user,
  }
};

export const createUser = (user) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/signup', user)
      .then(response => {
        console.log(response);
        dispatch(createUserSuccess(response.data.userData))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: 'LOGIN_USER_SUCCESS',
    user: user,

  }
};

export const loginUser = (user) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/login', user)
      .then(response => {
        console.log(response);
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          dispatch(loginUserSuccess(response.data.userData))
        } else {
          //TODO dispatch error
        }

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    user,
  }
};

export const fetchUser = (user) => {
  return (dispatch) => {
    console.log(head);
    return Axios.get(config.apiUrl + '/user', {headers :{'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        dispatch(fetchUserSuccess(response.data.user));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: 'UPDATE_USER_SUCCESS',
    user
  }
};

export const updateUser = (user) => {
  return (dispatch) => {
    return Axios.patch(config.apiUrl + '/user', user, {headers:{'Authorization': localStorage.token}})
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(user.password);
        if (user.password !== '') {
           Axios.patch(config.apiUrl + '/user/password', user, {headers:{'Authorization': localStorage.token}})
             .then(response => {
               console.log(response);
               dispatch(updateUserSuccess(response.data.user));
             })
             .catch(err => {console.log(err)});
        } else {
          dispatch(updateUserSuccess(response.data.user));
        }
      })

      .catch(error => {
        throw(error);
      });
  };
};

export const deleteUserSuccess = () => {
  return {
    type: 'DELETE_USER_SUCCESS',
  }
};

export const deleteUser = user => {
  return (dispatch) => {
    console.log(head);
    return Axios.delete(config.apiUrl + '/user', {headers :{'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        if (response.data.success) {
          localStorage.removeItem('token');
          dispatch(deleteUserSuccess());
        } else {
          //TODO delete redux error
        }

      })
      .catch(error => {
        throw(error);
      });
  };
}