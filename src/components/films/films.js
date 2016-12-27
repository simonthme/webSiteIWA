/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import { Grid, Segment, Divider, Header, Input, Menu } from 'semantic-ui-react'


export default class Films extends Component {

  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
              <Menu vertical>
                <Menu.Item>
                  <Input placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                  <Header as='h4'>Categories</Header>
                  <Menu.Menu>
                    <Menu.Item name='vostfr' active={activeItem === 'vostfr'} onClick={this.handleItemClick}>
                      Films VOSTFR
                    </Menu.Item>
                    <Menu.Item name='vf' active={activeItem === 'vf'} onClick={this.handleItemClick}>
                      Films VF
                    </Menu.Item>
                    <Menu.Item name='dvd' active={activeItem === 'dvd'} onClick={this.handleItemClick}>
                      DVDRiP / BDRiP
                    </Menu.Item>
                    <Menu.Item name='bluray' active={activeItem === 'bluray'} onClick={this.handleItemClick}>
                      Blu-Ray 3D
                    </Menu.Item>
                    <Menu.Item name='old' active={activeItem === 'old'} onClick={this.handleItemClick}>
                      Vieux Films
                    </Menu.Item>
                    <Menu.Item name='dessin' active={activeItem === 'dessin'} onClick={this.handleItemClick}>
                      Dessins Animés
                    </Menu.Item>
                  </Menu.Menu>
                </Menu.Item>
              </Menu>

        </div>
    )
  }
}