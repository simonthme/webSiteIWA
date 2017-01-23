/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';

import SeriesScene from '../scenes/seriesScene';

export default class SeriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SeriesScene/>
    );
  }
}