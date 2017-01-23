/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component} from 'react';
import HomeMenuContainer from '../home/containers/homeMenuContainer';


export default class App extends Component {


  render() {

    return (
      <div>
        <HomeMenuContainer/>
        {this.props.children}
      </div>
    )
  }


}
