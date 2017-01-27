/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeMenuContainer from '../home/containers/homeMenuContainer';
import * as userAction from '../../actions/userAction';
import * as authAction from '../../actions/authAction';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if(this.props.auth) {
      this.props.fetchUser()
        .then(() => {
          console.log(this.props.user);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    return (
      <div>
        <HomeMenuContainer/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    auth: state.auth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(userAction.fetchUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
