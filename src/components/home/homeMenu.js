/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import { Input, Menu, Segment, Button, Modal, Header } from 'semantic-ui-react'
import SegmentTitle from './segmentTitle';
import {browserHistory} from 'react-router';
import Login from '../login/login';


export default class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',

    }
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
    browserHistory.push('/' + name);
  }

  render() {
    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={this.handleItemClick.bind(this)}/>
          <Menu.Item name='films' active={this.state.activeItem === 'films'} onClick={this.handleItemClick.bind(this)}/>
          <Menu.Item name='series' active={this.state.activeItem === 'series'} onClick={this.handleItemClick.bind(this)}/>
          <Menu.Menu position='right'>
            <Modal trigger={<Button style={{marginTop: 5, marginBottom: 5}} basic color='green'>Login</Button>}>
              <Login/>
            </Modal>

          </Menu.Menu>
        </Menu>

      </div>
    )
  }


}