/**
 * Created by simonthome on 27/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS':
      return action.movie;
      break;
    case 'FETCH_MOVIE_CATEGORY_SUCCESS':
      return action.movieCategory;
    case 'SEARCH_MOVIE_SUCCESS':
      return [
        ...state.filter(movie => {
         switch(action.searchValue) {
           case 'title':
             console.log(action.searchString);
             console.log();
             return movie.movieTitle.toLowerCase()
                 .startsWith(action.searchString.toLowerCase());
             break;
           default:
             return movie;
             break;
         }
        })
      ];
        break;
    default:
      return state;
  }
};