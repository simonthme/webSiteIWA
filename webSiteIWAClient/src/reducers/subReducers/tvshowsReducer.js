/**
 * Created by simonthome on 28/01/2017.
 */
'use strict';
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TVSHOW_SUCCESS':
      console.log('reducer tv show');
      console.log(action.tvshow);
      return action.tvshow;
      break;
    case 'FETCH_TVSHOW_CATEGORY_SUCCESS':
      return action.tvshowCategory;
    case 'SEARCH_TVSHOW_SUCCESS':
      return [
        ...state.filter(tvShow => {
          switch(action.searchValue) {
            case 'title':
              return tvShow.tvShowTitle.toLowerCase()
                .startsWith(action.searchString.toLowerCase());
              break;
            case 'prodDate':
              const dateObj = new Date(tvShow.productionDate);
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
              let tvShowProdDate = dateDay + '/' + dateMonth + '/' + dateObj.getFullYear();
              return tvShowProdDate.startsWith(action.searchString);
              break;
            case 'addDate':
              const addDate = new Date(tvShow.productionDate);
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
              let tvShowAddDate = addDateDay + '/' + addDateMonth + '/' + addDate.getFullYear();
              return tvShowAddDate.startsWith(action.searchString);
              break;
            default:
              return tvShow;
              break;
          }
        })
      ];
      break;
    default:
      return state;
  }
};