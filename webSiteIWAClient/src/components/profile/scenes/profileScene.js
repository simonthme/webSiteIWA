/**
 * Created by simonthome on 23/01/2017.
 */
import React, {Component} from 'react';
import {Button, Header, Segment} from 'semantic-ui-react';
import NewMovieContainer from '../../films/containers/newMovieContainer';
import UpdateProfileContainer from '../containers/updateProfileContainer';
import DeleteProfileContainer from '../containers/deleteProfileContainer';
import MyMovieCardScene from '../../films/scenes/myMovieCardsScene';
import NewTvshowContainer from '../../series/containers/newTvshowContainer';
import MyTvshowCardContainer from '../../series/containers/myTvshowCardContainer';

const ProfileScene = (props) => {
  console.log(props.myTvshows);
  return (
    <div>
      <Header as='h1'>Bonjour, {props.firstName} {props.lastName}</Header>
      <Segment raised>
        <Header as="h2">Mes films</Header>
      <MyMovieCardScene myMovies={props.myMovies} deleteMovie={props.deleteMovie}/>
      </Segment>
      <Segment raised>
        <Header as="h2">Mes séries</Header>
      <MyTvshowCardContainer deleteTvshow={props.deleteTvshow}/>
      </Segment>
      <UpdateProfileContainer/>
      <NewMovieContainer/>
      <NewTvshowContainer/>
      <Button onClick={props.logout}>Log out</Button>
      <DeleteProfileContainer />
    </div>
  );
};

export default ProfileScene;