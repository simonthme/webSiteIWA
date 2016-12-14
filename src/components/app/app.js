/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component} from 'react';
import HomeMenu from '../home/homeMenu';


export default class App extends Component {


  render() {

    return (
      <div>
        <HomeMenu/>
        {this.props.children}
      </div>
    )
  }


}
