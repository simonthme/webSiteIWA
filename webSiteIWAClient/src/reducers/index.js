/**
 * Created by simonthome on 12/12/2016.
 */
import { combineReducers } from 'redux';
import user from './userReducer';
import auth from './authReducer';


export default combineReducers({
  user:user,
  auth: auth
});