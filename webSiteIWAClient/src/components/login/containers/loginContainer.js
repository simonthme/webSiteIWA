/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginScene from '../scenes/loginScene';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';
import * as authAction from '../../../actions/authAction';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      references: { username: 'username', password: 'password'},
      modalOpen: false,
    };
  }

  handleOpen() {this.setState({modalOpen: true});}

  handleClose() {this.setState({modalOpen: false});}

  updateUsername(e) {this.setState({username: e.target.value});}

  updatePassword(e) {this.setState({password: e.target.value});}

  login() {
    const userData = {
      userName: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData)
      .then(() => {
        this.handleClose();
        console.log(this.props.user);
        this.props.isAuth();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <LoginScene
        updateUsername={this.updateUsername.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        login={this.login.bind(this)}
        references={this.state.references}
        handleClose={this.handleClose.bind(this)}
        handleOpen={this.handleOpen.bind(this)}
        modalOpen={this.state.modalOpen}
      />
      );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(userAction.loginUser(user)),
    isAuth: () => dispatch(authAction.isAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);