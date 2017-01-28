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
        ...state.filter(tvshow => {
          switch(action.searchValue) {
            case 'title':
              console.log(action.searchString);
              console.log();
              return tvshow.tvShowTitle.toLowerCase()
                .startsWith(action.searchString.toLowerCase());
              break;
            default:
              return tvshow;
              break;
          }
        })
      ];
      break;
    default:
      return state;
  }
};