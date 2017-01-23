/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import { Grid, Segment, Divider, Header, Input, Menu } from 'semantic-ui-react'
import FilmsScene from '../scenes/filmsScene';


export default class FilmsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem : ''
    };
  };

  handleItemClick = (e, {name}) => this.setState({ activeItem: name });

  render() {
    return (
        <div>
          <FilmsScene
          handleItemClick={this.handleItemClick.bind(this)}
          activeItem={this.state.activeItem}
          />
        </div>
    )
  }
}