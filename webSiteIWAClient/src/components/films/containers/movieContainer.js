/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import { Grid, Segment, Divider, Header, Input, Menu } from 'semantic-ui-react'
import MovieScene from '../scenes/movieScene';
import {connect} from 'react-redux';
import * as moviesAction from '../../../actions/moviesAction'


class MovieContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      options: [
        { key: 'title', text: 'Titre', value: 'title' },
        { key: 'prodDate', text: 'Date', value: 'prodDate' },
        { key: 'addDate', text: 'Ajout', value: 'addDate' },
      ],
      searchValue: 'title'

    };
  };

  componentDidMount() {
    this.props.fetchMovie()
      .then(() => {
        console.log('success fetch movie');
        console.log(this.props.movies);
      })
      .catch(err => console.log(err));
  }

  handleItemClick = (e, {name}) => {
    if (name !== 'Tous les films') {
      this.props.fetchMovieCategory({category: name})
        .then(() => {
          console.log('get successfull category');
          console.log(this.props.movies);
        })
        .catch(err => console.log(err));
    } else {
      this.props.fetchMovie()
        .then(() => {
          console.log('success fetch movie');
          console.log(this.props.movies);
        })
        .catch(err => console.log(err));
    }

    this.setState({activeItem: name});
  };

  updateSearchSelect (e, {value}) {
    this.setState({searchValue: value});
    console.log(this.state.searchValue);
  }

  updateSearch(searchString) {
    this.props.searchMovieSuccess(searchString.target.value, this.state.searchValue);
    // this.props.searchMovie({searchTitle: this.state.searchValue})
    //   .then(() => {
    //   console.log('ok search');
    //   console.log(this.props.movies);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
          <MovieScene
          handleItemClick={this.handleItemClick.bind(this)}
          activeItem={this.state.activeItem}
          movies={this.props.movies}
          options={this.state.options}
          updateSearch={this.updateSearch.bind(this)}
          updateSearchSelect={this.updateSearchSelect.bind(this)}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: () => dispatch(moviesAction.fetchMovie()),
    fetchMovieCategory: category => dispatch(moviesAction.fetchMovieCategory(category)),
    searchMovieSuccess: (searchString, searchValue) => dispatch(moviesAction.searchMovieSuccess(searchString, searchValue)),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);