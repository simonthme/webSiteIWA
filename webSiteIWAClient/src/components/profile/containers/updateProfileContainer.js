/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';
import * as authAction from '../../../actions/authAction';
import UpdateProfileScene from '../scenes/updateProfileScene';
import {browserHistory} from 'react-router'


class UpdateProfileContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      userName: this.props.user.userName,
      password: '',
      confirmPassword: '',
      modalOpen: false
    };
  }

  handleOpen() {this.setState({modalOpen: true})}

  handleClose() {this.setState({modalOpen: false})}

  updateLastName(e) {this.setState({lastName: e.target.value});}

  updateFirstName(e) {this.setState({firstName: e.target.value});}

  updateUsername(e) {this.setState({userName: e.target.value});}

  updatePassword(e) {this.setState({password: e.target.value});}

  updateUser () {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password
    };
    this.props.updateUser(userData)
      .then(() => {
        console.log(this.props.user);
        this.handleClose();
        this.setState({
          firstName: this.props.user.firstName,
          lastName: this.props.user.lastName,
          userName: this.props.user.userName,
          password: this.props.user.password})
      })
      .catch(err => {console.log(err)});
  }

  render() {
    return (
      <UpdateProfileScene
        updateLastName={this.updateLastName.bind(this)}
        updateFirstName={this.updateFirstName.bind(this)}
        updateUsername={this.updateUsername.bind(this)}
        updatePassword={this.updatePassword.bind(this)}
        modalOpen={this.state.modalOpen}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
        updateUser={this.updateUser.bind(this)}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        userName={this.state.userName}
        password={this.state.password}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: user => dispatch(userAction.updateUser(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileContainer);
