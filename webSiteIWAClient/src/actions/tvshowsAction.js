/**
 * Created by simonthome on 28/01/2017.
 */

import Axios from 'axios';
import actionTypes from './actionTypes';
import config from '../../assets/config';

export const fetchTvshowSuccess = (tvshow) => {
  return {
    type: 'FETCH_TVSHOW_SUCCESS',
    tvshow
  }
};

export const fetchTvshow = () => {
  console.log('FETCHONG tv show');
  return (dispatch) => {
    return Axios.get(config.apiUrl + '/tvshow')
      .then(response => {
        console.log(response);
        dispatch(fetchTvshowSuccess(response.data.tvShows))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchTvshowCategorySuccess = (tvshowCategory) => {
  return {
    type: 'FETCH_TVSHOW_CATEGORY_SUCCESS',
    tvshowCategory
  }
};

export const fetchTvshowCategory = (category) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/tvshow/category', category)
      .then(response => {
        dispatch(fetchTvshowCategorySuccess(response.data.tvShows))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const searchTvshowSuccess = (searchString, searchValue) => {
  return {
    type: 'SEARCH_TVSHOW_SUCCESS',
    searchString,
    searchValue
  }
};

export const searchTvshow = (searchString) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/tvshow/search', searchString)
      .then(response => {
        dispatch(searchTvshowSuccess(response.data.tvshows))
      })
      .catch(error => {
        throw(error);
      });
  };
};