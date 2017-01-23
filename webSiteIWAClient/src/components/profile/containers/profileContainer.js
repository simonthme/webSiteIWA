/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';
import ProfileScene from '../scenes/profileScene';

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProfileScene/>
    )
  }


}