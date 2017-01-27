/**
 * Created by simonthome on 23/01/2017.
 */

export const isAuth = () => {
  return {
    type: 'IS_AUTH'
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT_USER',
  }
};