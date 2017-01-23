/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../../../actions/userAction';

import HomeScene from '../scenes/homeScene';


class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleArray: ['New Films', 'New Series']
    };
    console.log(this.props.user);
  }

  render() {
    return (
      <div>
        <HomeScene titleArray={this.state.titleArray}/>
      </div>
    )
  }



}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
};


export default connect(mapStateToProps)(HomeContainer);