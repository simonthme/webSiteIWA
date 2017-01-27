/**
 * Created by simonthome on 23/01/2017.
 */
import React, {Component} from 'react';
import {Button, Header} from 'semantic-ui-react';
import NewMovieContainer from '../../films/containers/newMovieContainer';
import UpdateProfileContainer from '../containers/updateProfileContainer';
import DeleteProfileContainer from '../containers/deleteProfileContainer';
import MyMovieCardScene from '../../films/scenes/myMovieCardsScene';

const ProfileScene = (props) => {
  return (
    <div>
      <Header as='h1'>Bonjour, {props.firstName} {props.lastName}</Header>
      <MyMovieCardScene myMovies={props.myMovies}/>
      <UpdateProfileContainer />
      <NewMovieContainer/>
      <Button onClick={props.logout}>Log out</Button>
      <DeleteProfileContainer />
    </div>
  );
};

export default ProfileScene;