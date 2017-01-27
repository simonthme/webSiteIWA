/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import HomeMenuScene from '../scenes/homeMenuScene';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as authAction from '../../../actions/authAction';



class HomeMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    }
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
    if (name !== 'home') {
      browserHistory.push('/' + name);
    } else {
      browserHistory.push('/');
    }
  }



  render() {
    return (
      <div>
        <HomeMenuScene
          handleItemClick={this.handleItemClick.bind(this)}
          activeItem={this.state.activeItem}
          isAuth={this.props.auth}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(HomeMenuContainer);