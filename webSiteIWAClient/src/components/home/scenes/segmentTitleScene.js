/**
 * Created by simonthome on 22/01/2017.
 */
import React,{Component} from 'react';
import { Segment, Header } from 'semantic-ui-react'
import MovieCardScene from '../../films/scenes/movieCardScene';
import TvShowCardContainer from '../../series/containers/tvShowCardContainer'

const SegmentTitle = (props) => {
  let segmentScene = '';
  if (props.title === 'Nouveaux Films') {
    segmentScene = <MovieCardScene movies={props.newMovies}/>
  } else if (props.title === 'Nouvelles Séries') {
    segmentScene = <TvShowCardContainer/>;
  }
  return (
    <div>
      <Segment raised>
        <Header as="h2" color="red" inverted>{props.title}</Header>
        {segmentScene}
      </Segment>
    </div>
  )
};

export default SegmentTitle;