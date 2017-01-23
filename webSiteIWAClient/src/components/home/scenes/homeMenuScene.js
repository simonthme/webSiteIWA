/**
 * Created by simonthome on 22/01/2017.
 */
import React,{Component} from 'react';
import { Input, Menu, Segment, Button, Modal, Header } from 'semantic-ui-react'

import LoginContainer from '../../login/containers/loginContainer';

const HomeMenuScene = (props) => {
  console.log(props.isAuth);

  if (props.isAuth) {
    return (
      <Menu pointing widths={4} size='small'>
        <Menu.Item name='home' active={props.activeItem === 'home'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='films' active={props.activeItem === 'films'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='series' active={props.activeItem === 'series'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='profile' active={props.activeItem === 'profile'} onClick={props.handleItemClick.bind(this)}>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu pointing widths={4} size='small'>
        <Menu.Item name='home' active={props.activeItem === 'home'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='films' active={props.activeItem === 'films'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='series' active={props.activeItem === 'series'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item>
          <LoginContainer/>
        </Menu.Item>
      </Menu>
    );
  }

};

export default HomeMenuScene;