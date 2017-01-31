/**
 * Created by simonthome on 27/01/2017.
 */
import Axios from 'axios';

import config from '../../assets/config';

export const createEpisodeSuccess = (episode) => {
  return {
    type: 'CREATE_EPISODE_SUCCESS',
    episode,
  }
};

export const createEpisode = (episode) => {
  return (dispatch) => {
    return Axios.put(config.apiUrl + '/episode',episode, {headers: {'Authorization': localStorage.token}})
      .then(response => {
        dispatch(createEpisodeSuccess(response.data.episode))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchEpisodeByTvShowSuccess = (episode) => {
  console.log('episode success' + JSON.stringify(episode));
  return {
    type: 'FETCH_MY_EPISODE_SUCCESS',
    episode
  }
};

export const fetchEpisodeByTvShowError = () => {
  return {
    type: 'FETCH_MY_EPISODE_ERROR',
  }
};

export const fetchEpisodeByTvshow = (id) => {
  return (dispatch) => {
    return Axios.post(config.apiUrl + '/episode', id)
      .then(response => {

        if (response.data.success) {
          dispatch(fetchEpisodeByTvShowSuccess(response.data.episodes))
        } else {
          dispatch(fetchEpisodeByTvShowError())
        }

      })
      .catch(error => {
        throw(error);
      });
  };
};


