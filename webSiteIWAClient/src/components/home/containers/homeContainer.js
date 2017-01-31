/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as newMovieAction from '../../../actions/newMovieAction';

import HomeScene from '../scenes/homeScene';


class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleArray: ['Bienvenue !','Nouveaux Films', 'Nouvelles Séries']
    };
    console.log(this.props.user);
  }

  componentDidMount() {
    this.props.fetchNewMovies()
      .then(() => {
        console.log('newMovies fetch');
        console.log(this.props.newMovies)
      })
  }


  render() {
    return (
      <div>
        <HomeScene
          titleArray={this.state.titleArray}
          newMovies={this.props.newMovies}
        />

      </div>
    )
  }



}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    newMovies: state.newMovies
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewMovies: () => dispatch(newMovieAction.fetchNewMovie()),

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);