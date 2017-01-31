/**
 * Created by simonthome on 27/01/2017.
 */
import Axios from 'axios';
import config from '../../assets/config';

export const fetchMovieSuccess = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    movie
  }
};

export const fetchMovie = () => {
  return (dispatch) => {
    return Axios.get(config.apiUrl + '/movie')
      .then(response => {
        dispatch(fetchMovieSuccess(response.data.movies))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchMovieCategorySuccess = (movieCategory) => {
  return {
    type: 'FETCH_MOVIE_CATEGORY_SUCCESS',
    movieCategory
  }
};

export const fetchMovieCategory = (category) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/movie/category', category)
      .then(response => {
        dispatch(fetchMovieCategorySuccess(response.data.movies))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const searchMovieSuccess = (searchString, searchValue) => {
  return {
    type: 'SEARCH_MOVIE_SUCCESS',
    searchString,
    searchValue
  }
};

export const searchMovie = (searchString) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/movie/search', searchString)
      .then(response => {
        dispatch(searchMovieSuccess(response.data.movies))
      })
      .catch(error => {
        throw(error);
      });
  };
};