/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';
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
        console.log(this.props.myMovies);
      })
  }

  logout() {
    this.props.logoutUser();
  }


  render() {
    return (
      <ProfileScene
      logout={this.logout.bind(this)}
      firstName={this.props.user.firstName}
      lastName={this.props.user.lastName}
      user={this.props.user}
      myMovies={this.props.myMovies}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    myMovies: state.myMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(authAction.logoutUser()),
    isAuth: () => dispatch(authAction.isAuth()),
    fetchMoviesByUser: () => dispatch(myMoviesAction.fetchMovieByUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);