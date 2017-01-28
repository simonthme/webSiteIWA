/**
 * Created by simonthome on 27/01/2017.
 */
import Axios from 'axios';
import actionTypes from './actionTypes';
import config from '../../assets/config';

export const createTvshowSuccess = (tvshow) => {
  return {
    type: 'CREATE_TVSHOW_SUCCESS',
    tvshow,
  }
};

export const createTvshow = (tvshow) => {
  return (dispatch) => {
    return Axios.put(config.apiUrl + '/tvshow',tvshow, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        dispatch(createTvshowSuccess(response.data.tvShow))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchTvshowByUserSuccess = (tvshow) => {
  return {
    type: 'FETCH_MY_TVSHOW_SUCCESS',
    tvshow
  }
};

export const fetchTvshowByUser = () => {
  console.log('fetching tv shows');
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/tvshow',{}, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        dispatch(fetchTvshowByUserSuccess(response.data.tvShows))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateTvshowSuccess = (tvshow, id) => {
  console.log('inevnziv');
  console.log(tvshow);
  return {
    type: 'UPDATE_TVSHOW_SUCCESS',
    tvshow,
    id
  }
};

export const updateTvshow = (tvshow, index) => {
  return (dispatch) => {
    return Axios.patch(config.apiUrl + '/tvshow',tvshow, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        dispatch(updateTvshowSuccess(response.data.tvShow, index))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deleteTvshowSuccess = (tvshow, id) => {
  return {
    type: 'DELETE_TVSHOW_SUCCESS',
    id
  }
};

export const deleteTvshow = (tvshow, index) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/tvshow/delete',tvshow, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        console.log(response);
        dispatch(deleteTvshowSuccess(response.data.tvShow, index))
      })
      .catch(error => {
        throw(error);
      });
  };
};

