/**
 * Created by simonthome on 14/12/2016.
 */
import React,{Component} from 'react';
import { Input, Menu, Segment, Button } from 'semantic-ui-react'
import SegmentTitle from './segmentTitle';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleArray: ['New Films', 'New Series']
    }
  }

  render() {
    return (
      <div>
        {
          this.state.titleArray.map((title, index) => {
            return <SegmentTitle key={index} title={title} />
          })
        }
      </div>
    )
  }


}