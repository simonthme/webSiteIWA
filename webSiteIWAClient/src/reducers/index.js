/**
 * Created by simonthome on 12/12/2016.
 */
import { combineReducers } from 'redux';
import user from './userReducer';
import auth from './authReducer';
import myMovies from './myMoviesRecucer';


export default combineReducers({
  user:user,
  auth: auth,
  myMovies:myMovies,
});