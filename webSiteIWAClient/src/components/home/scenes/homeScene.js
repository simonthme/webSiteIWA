/**
 * Created by simonthome on 22/01/2017.
 */
import SegmentTitleScene from '../scenes/segmentTitleScene';
import React, {Component} from 'react';


const HomeScene = (props) => {
  console.log('Home scene');
  return (
    <div>
    {
      props.titleArray.map((title, index) => {
      return <SegmentTitleScene key={index} title={title} newMovies={props.newMovies} />
    })
    }
    </div>
  );
};

export default HomeScene;