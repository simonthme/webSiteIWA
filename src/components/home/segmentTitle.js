/**
 * Created by simonthome on 14/12/2016.
 */

import React,{Component} from 'react';
import { Input, Menu, Segment, Button } from 'semantic-ui-react'

const SegmentTitle = (props) => {
  return (
    <div>
      <Segment raised>
        {props.title}
      </Segment>
    </div>
  )
};

export default SegmentTitle