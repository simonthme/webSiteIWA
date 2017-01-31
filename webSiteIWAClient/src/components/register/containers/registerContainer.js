/**
 * Created by maicaz on 26/12/2016.
 */
import React, {Component} from 'react';

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
          confirmPassword: '',
            modalOpen: false,
          messageVisible: true,
          errorMessage: '',
          checked: false,
        };
    }

    handleOpen() {this.setState({modalOpen: true})}

    handleClose() {this.setState({modalOpen: false})}

    updateLastName(e) {this.setState({lastName: e.target.value});}

    updateFirstName(e) {this.setState({firstName: e.target.value});}

    updateUsername(e) {this.setState({username: e.target.value});}

    updatePassword(e) {this.setState({password: e.target.value});}

    updateConfirmPassword(e) {this.setState({confirmPassword: e.target.value})}

    dismissMessage(e, data) {
      this.setState({messageVisible:true});
    }
    updateCheck() {
      let updateChecked = !this.state.checked;
      this.setState({checked: updateChecked});
    }


    register() {
      console.log(this.state.checked);
      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.state.confirmPassword);
      if (this.state.firstName === '' || this.state.lastName === '' || this.state.username === '' || this.state.password !== this.state.confirmPassword || !this.state.checked) {
        this.setState({messageVisible: false, errorMessage: 'Veuillez remplir les champs correctement.'});
      } else {
        const userData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.username,
          password: this.state.password,
        };
        this.props.createUser(userData).then(() => {
          if (Object.keys(this.props.user).length === 0 && this.props.user.constructor === Object) {
            this.setState({messageVisible: false, errorMessage: "Le nom d'utilisateur est déjà pris."});
          } else {
            this.handleClose();
          }
        })
          .catch(err => console.log(err));

      }
    }

    render() {
        return (
          <RegisterScene
            updateLastName={this.updateLastName.bind(this)}
            updateFirstName={this.updateFirstName.bind(this)}
            updateUsername={this.updateUsername.bind(this)}
            updatePassword={this.updatePassword.bind(this)}
            updateConfirmPassword={this.updateConfirmPassword.bind(this)}
            register={this.register.bind(this)}
            modalOpen={this.state.modalOpen}
            errorMessage={this.state.errorMessage}
            messageVisible={this.state.messageVisible}
            checked={this.state.checked}
            dismissMessage={this.dismissMessage.bind(this)}
            handleOpen={this.handleOpen.bind(this)}
            handleClose={this.handleClose.bind(this)}
            updateCheck={this.updateCheck.bind(this)}
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

