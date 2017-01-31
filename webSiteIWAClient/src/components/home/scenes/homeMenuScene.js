/**
 * Created by simonthome on 22/01/2017.
 */
import React,{Component} from 'react';
import { Menu, Button } from 'semantic-ui-react'

import LoginContainer from '../../login/containers/loginContainer';
import RegisterContainer from '../../register/containers/registerContainer';

const HomeMenuScene = (props) => {
  if (props.isAuth) {
    return (
      <Menu color="grey" inverted pointing widths={4} size='massive'>
        <Menu.Item name='home' active={props.activeItem === 'home'} onClick={props.handleItemClick}/>
        <Menu.Item name='films' active={props.activeItem === 'films'} onClick={props.handleItemClick}/>
        <Menu.Item name='series' active={props.activeItem === 'series'} onClick={props.handleItemClick.bind(this)}/>
        <Menu.Item name='profile' active={props.activeItem === 'profile'} onClick={props.handleItemClick.bind(this)}>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu pointing color="grey" inverted  widths={4} size='massive'>
        <Menu.Item name='home' active={props.activeItem === 'home'} onClick={props.handleItemClick}/>
        <Menu.Item name='films' active={props.activeItem === 'films'} onClick={props.handleItemClick}/>
        <Menu.Item name='series' active={props.activeItem === 'series'} onClick={props.handleItemClick}/>
        <Menu.Item>
            <Button.Group>
                <RegisterContainer/>
                <Button.Or />
                <LoginContainer/>
            </Button.Group>
        </Menu.Item>
      </Menu>
    );
  }

};

export default HomeMenuScene;