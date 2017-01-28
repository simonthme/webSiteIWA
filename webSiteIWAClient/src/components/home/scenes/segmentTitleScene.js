/**
 * Created by simonthome on 22/01/2017.
 */
import React,{Component} from 'react';
import { Input, Menu, Segment, Button, Header } from 'semantic-ui-react'
import MovieCardScene from '../../films/scenes/movieCardScene';
import TvShowCardContainer from '../../series/containers/tvShowCardContainer'

const SegmentTitle = (props) => {
  let segmentScene = '';
  if (props.title === 'Nouveaux films') {
    segmentScene = <MovieCardScene movies={props.newMovies}/>
  } else {
    segmentScene = <TvShowCardContainer/>;
  }
  return (
    <div>
      <Segment raised>
        <Header as="h2">{props.title}</Header>
        {segmentScene}
      </Segment>
    </div>
  )
};

export default SegmentTitle;