/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as myTvshowAction from '../../../actions/myTvshowAction';
import * as authAction from '../../../actions/authAction';
import * as myMoviesAction from '../../../actions/myMoviesAction';
import ProfileScene from '../scenes/profileScene';


class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchMoviesByUser()
      .then(() => {
        console('fetch movie success');
      })
      .catch(err => console.log(err));

  }

  logout() {
    this.props.logoutUser();
  }

  deleteMovie(movie, index) {
    this.props.deleteMovie(movie, index)
      .then(() => {
      console.log(this.props.myMovies);
      })
      .catch(err => console.log(err));
  }

  deleteTvshow(tvshow, index) {
    this.props.deleteTvshow(tvshow, index)
      .then(() => {
        console.log('TV SHOW DELETE');
        console.log(this.props.myTvshows);
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <ProfileScene
      logout={this.logout.bind(this)}
      firstName={this.props.user.firstName}
      lastName={this.props.user.lastName}
      user={this.props.user}
      myMovies={this.props.myMovies}
      deleteMovie={this.deleteMovie.bind(this)}
      deleteTvshow={this.deleteTvshow.bind(this)}
      myTvshows={this.props.myTvshows}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    myMovies: state.myMovies,
    myTvshows: state.myTvshows,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(authAction.logoutUser()),
    isAuth: () => dispatch(authAction.isAuth()),
    fetchMoviesByUser: () => dispatch(myMoviesAction.fetchMovieByUser()),
    deleteMovie: (movie, index) => dispatch(myMoviesAction.deleteMovie(movie, index)),
    fetchTvshowsByUser: () => dispatch(myTvshowAction.fetchTvshowByUser()),
    deleteTvshow: (tvshow, index) => dispatch(myTvshowAction.deleteTvshow(tvshow, index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);