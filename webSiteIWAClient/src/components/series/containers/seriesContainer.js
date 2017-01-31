/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';

import SeriesScene from '../scenes/seriesScene';
import * as myEpisodesAction from '../../../actions/myEpisodesAction';
import * as tvshowAction from '../../../actions/tvshowsAction';
import {connect} from 'react-redux';

class SeriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seasonOptions: [
        { value: 'season1', text: 'Saison 1',  },
        { text: 'Saison 2', value: 'season2' },
        { text: "Saison 3", value: 'season3' },
      ],
      activeItem: '',
      options: [
        { key: 'title', text: 'Titre', value: 'title' },
        { key: 'prodDate', text: 'Date', value: 'prodDate' },
        { key: 'addDate', text: 'Ajout', value: 'addDate' },
      ],
      searchValue: 'title'
    };
  }

  componentDidMount() {
    this.props.fetchTvshow()
      .then(() => {
        console.log('success fetch tvshows');
        console.log(this.props.tvshows);
      })
      .catch(err => console.log(err));
  }

  handleItemClick = (e, {name}) => {
    if (name !== 'Tous les films') {
      this.props.fetchTvshowCategory({category: name})
        .then(() => {
          console.log('get successfull category');
          console.log(this.props.tvshows);
        })
        .catch(err => console.log(err));
    } else {
      this.props.fetchTvshow()
        .then(() => {
          console.log('success fetch tvshows');
          console.log(this.props.tvshows);
        })
        .catch(err => console.log(err));
    }

    this.setState({activeItem: name});
  };

  updateSearchSelect (e, {value}) {
    this.state.searchValue = value;
    console.log(this.state.searchValue);
  }

  updateSearch(searchString) {
    if (searchString.target.value !== '') {
      console.log('search');
      this.props.searchTvshowSuccess(searchString.target.value, this.state.searchValue);
    } else {
      console.log('init');
      this.props.fetchTvshow()
        .then(() => {
          console.log('success fetch movie');
          console.log(this.props.movies);
        })
        .catch(err => console.log(err));
    }
  };

  updateSeason(e,value, id) {
    console.log(value);
    console.log(id);
    this.props.fetchEpisodes({tvShowId: id, season: value})
      .then(() => {
        console.log(this.props.myEpisodes)
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      <SeriesScene
      seasonOptions={this.state.seasonOptions}
      updateSeason={this.updateSeason.bind(this)}
      myEpisodes={this.props.myEpisodes}
      handleItemClick={this.handleItemClick.bind(this)}
      activeItem={this.state.activeItem}
      options={this.state.options}
      updateSearch={this.updateSearch.bind(this)}
      updateSearchSelect={this.updateSearchSelect.bind(this)}
      tvshows={this.props.tvshows}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    myEpisodes: state.myEpisodes,
    tvshows: state.tvshows,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEpisodes: (id) => dispatch(myEpisodesAction.fetchEpisodeByTvshow(id)),
    searchTvshowSuccess: (searchString, searchValue) => dispatch(tvshowAction.searchTvshowSuccess(searchString, searchValue)),
    fetchTvshow: () => dispatch(tvshowAction.fetchTvshow()),
    fetchTvshowCategory: (category) => dispatch(tvshowAction.fetchTvshowCategory(category)),


  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesContainer);