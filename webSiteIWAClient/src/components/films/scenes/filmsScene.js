/**
 * Created by simonthome on 22/01/2017.
 */
import React, {Component} from 'react';
import {Grid, Segment, Divider, Header, Input, Menu} from 'semantic-ui-react'

const FilmsScene = (props) => {
  return (
    <Menu vertical>
      <Menu.Item>
        <Input placeholder='Search...'/>
      </Menu.Item>
      <Menu.Item>
        <Header as='h4'>Categories</Header>
        <Menu.Menu>
          <Menu.Item name='vostfr' active={props.activeItem === 'vostfr'} onClick={props.handleItemClick}>
            Films VOSTFR
          </Menu.Item>
          <Menu.Item name='vf' active={props.activeItem === 'vf'} onClick={props.handleItemClick}>
            Films VF
          </Menu.Item>
          <Menu.Item name='dvd' active={props.activeItem === 'dvd'} onClick={props.handleItemClick}>
            DVDRiP / BDRiP
          </Menu.Item>
          <Menu.Item name='bluray' active={props.activeItem === 'bluray'} onClick={props.handleItemClick}>
            Blu-Ray 3D
          </Menu.Item>
          <Menu.Item name='old' active={props.activeItem === 'old'} onClick={props.handleItemClick}>
            Vieux Films
          </Menu.Item>
          <Menu.Item name='dessin' active={props.activeItem === 'dessin'} onClick={props.handleItemClick}>
            Dessins Animés
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
  );
};

export default FilmsScene;