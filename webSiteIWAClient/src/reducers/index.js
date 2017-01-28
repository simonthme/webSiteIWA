/**
 * Created by simonthome on 12/12/2016.
 */
import { combineReducers } from 'redux';
import user from './subReducers/userReducer';
import auth from './subReducers/authReducer';
import myMovies from './subReducers/myMoviesRecucer';
import myTvshows from './subReducers/myTvshowReducer';
import newMovies from './subReducers/newMoviesReducer';
import movies from './subReducers/moviesReducer'
import myEpisodes from './subReducers/myEpisodesReducer';
import newTvshows from './subReducers/newTvshowsReducer';
import tvshows from './subReducers/tvshowsReducer';


export default combineReducers({
  user:user,
  auth: auth,
  myMovies:myMovies,
  newMovies:newMovies,
  movies: movies,
  myTvshows: myTvshows,
  myEpisodes: myEpisodes,
  newTvshows:newTvshows,
  tvshows:tvshows,
});