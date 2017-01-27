/**
 * Created by simonthome on 24/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';
import * as authAction from '../../../actions/authAction';
import DeleteProfileScene from '../scenes/deleteProfileScene';
import {browserHistory} from 'react-router';

class DeleteProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    }
  }

  handleOpen() {this.setState({modalOpen: true})}

  handleClose() {this.setState({modalOpen: false})}

  deleteProfile() {
    this.props.deleteUser()
      .then(() => {
        this.props.isAuth();
        browserHistory.push('/');
      })

  }

  render() {
    return (
      <DeleteProfileScene
        deleteProfile={this.deleteProfile.bind(this)}
        modalOpen={this.state.modalOpen}
        handleOpen={this.handleOpen.bind(this)}
        handleClose={this.handleClose.bind(this)}
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
    deleteUser: () => dispatch(userAction.deleteUser()),
    isAuth: () => dispatch(authAction.isAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfileContainer);

