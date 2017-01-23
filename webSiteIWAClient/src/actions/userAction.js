/**
 * Created by simonthome on 12/12/2016.
 */

import Axios from 'axios';
import actionTypes from './actionTypes';
import config from '../../assets/config';

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
        window.localStorage.setItem('token', response.data.token);
        dispatch(loginUserSuccess(response.data.userData))
      })
      .catch(error => {
        throw(error);
      });
  };
};