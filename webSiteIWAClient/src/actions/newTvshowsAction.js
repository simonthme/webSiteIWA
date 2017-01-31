/**
 * Created by simonthome on 28/01/2017.
 */
import Axios from 'axios';
import config from '../../assets/config';

export const fetchNewTvshowSuccess = tvshows => {
  return {
    type: 'FETCH_NEW_TVSHOW_SUCCESS',
    tvshows,
  }
};


export const fetchNewTvshows = () => {
  console.log('in fetch action  !! ');
  return (dispatch) => {
    return Axios.get(config.apiUrl + '/tvshow/new')
      .then(response => {
        console.log(response);
        dispatch(fetchNewTvshowSuccess(response.data.newTvShows))
      })
      .catch(error => {
        throw(error);
      });
  };
};