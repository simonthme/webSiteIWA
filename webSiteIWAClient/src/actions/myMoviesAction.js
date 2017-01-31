/**
 * Created by simonthome on 23/01/2017.
 */
import Axios from 'axios';
import config from '../../assets/config';

export const createMovieSuccess = (movie) => {
  return {
    type: 'CREATE_MOVIE_SUCCESS',
    movie,
  }
};

export const createMovie = (movie) => {
  return (dispatch) => {
    return Axios.put(config.apiUrl + '/movie',movie, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        dispatch(createMovieSuccess(response.data.movie))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchMovieByUserSuccess = (movie) => {
  console.log('movie success' + JSON.stringify(movie));
  return {
    type: 'FETCH_MY_MOVIE_SUCCESS',
    movie
  }
};

export const fetchMovieByUser = () => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/movie',{}, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        dispatch(fetchMovieByUserSuccess(response.data.movies))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateMovieSuccess = (movie, id) => {
  return {
    type: 'UPDATE_MOVIE_SUCCESS',
    movie,
    id
  }
};

export const updateMovie = (movie, index) => {
  return (dispatch) => {
    return Axios.patch(config.apiUrl + '/movie',movie, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        dispatch(updateMovieSuccess(response.data.movie, index))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteMovieSuccess = (movie, id) => {
  return {
    type: 'DELETE_MOVIE_SUCCESS',
    id
  }
};

export const deleteMovie = (movie, index) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/movie/delete',movie, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        dispatch(deleteMovieSuccess(response.data.movie, index))
      })
      .catch(error => {
        throw(error);
      });
  };
};

