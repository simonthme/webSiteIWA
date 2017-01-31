/**
 * Created by simonthome on 27/01/2017.
 */
import Axios from 'axios';

import config from '../../assets/config';

export const fetchNewMovieSuccess = movie => {
  return {
    type: 'FETCH_NEW_MOVIE_SUCCESS',
    movie,
  }
};


export const fetchNewMovie = () => {
  return (dispatch) => {
    return Axios.get(config.apiUrl + '/movie/new')
      .then(response => {
        console.log(response);
        dispatch(fetchNewMovieSuccess(response.data.newMovies))
      })
      .catch(error => {
        throw(error);
      });
  };
};