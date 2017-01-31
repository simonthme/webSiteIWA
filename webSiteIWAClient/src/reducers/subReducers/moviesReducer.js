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
             return movie.movieTitle.toLowerCase()
                 .startsWith(action.searchString.toLowerCase());
             break;
           case 'prodDate':
              const dateObj = new Date(movie.productionDate);
              let dateMonth = '';
              if (dateObj.getMonth() < 10 && dateObj.getMonth() >= 0) {
                dateMonth = '0' + (dateObj.getMonth() + 1)
              } else {
                dateMonth = (dateObj.getMonth() + 1)
              }
             let dateDay = '';
             if (dateObj.getDate() < 10 && dateObj.getDate() >= 0) {
               dateDay = '0' + (dateObj.getDate())
             } else {
               dateDay = (dateObj.getDate())
             }
              let movieProdDate = dateDay + '/' + dateMonth + '/' + dateObj.getFullYear();
              return movieProdDate.startsWith(action.searchString);
              break;
           case 'addDate':
             const addDate = new Date(movie.productionDate);
             let addDateMonth = '';
             if (addDate.getMonth() < 10 && addDate.getMonth() >= 0) {
               addDateMonth = '0' + (addDate.getMonth() + 1)
             } else {
               addDateMonth = (addDate.getMonth() + 1)
             }
             let addDateDay = '';
             if (addDate.getDate() < 10 && addDate.getDate() >= 0) {
               addDateDay = '0' + (addDate.getDate())
             } else {
               addDateDay = (addDate.getDate())
             }
             let movieAddDate = addDateDay + '/' + addDateMonth + '/' + addDate.getFullYear();
             return movieAddDate.startsWith(action.searchString);
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