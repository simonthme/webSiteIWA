/**
 * Created by maicaz on 26/12/2016.
 */
import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import RegisterScene from '../scenes/registerScene';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';


 class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            username: '',
            password: '',
            modalOpen: false,
        };
    }

    handleOpen() {this.setState({modalOpen: true})}

    handleClose() {this.setState({modalOpen: false})}

    updateLastName(e) {this.setState({lastName: e.target.value});}

    updateFirstName(e) {this.setState({firstName: e.target.value});}

    updateUsername(e) {this.setState({username: e.target.value});}

    updatePassword(e) {this.setState({password: e.target.value});}

    register() {
      const userData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.username,
        password: this.state.password,
      };
      this.props.createUser(userData);
      this.handleClose();
    }

    render() {
        return (
          <RegisterScene
            updateLastName={this.updateLastName.bind(this)}
            updateFirstName={this.updateFirstName.bind(this)}
            updateUsername={this.updateUsername.bind(this)}
            updatePassword={this.updatePassword.bind(this)}
            register={this.register.bind(this)}
            modalOpen={this.state.modalOpen}
            handleOpen={this.handleOpen.bind(this)}
            handleClose={this.handleClose.bind(this)}
          />
        )
    }

}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    createUser: user => dispatch(userAction.createUser(user)),
    // loginUser: index => dispatch(userAction.loginUser(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

