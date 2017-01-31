/**
 * Created by simonthome on 23/01/2017.
 */
import React, {Component} from 'react';
import {Grid, Divider, Button, Header, Segment, Container, Icon} from 'semantic-ui-react';
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
        <Segment.Group>
            <Segment>
                <Header as='h1' textAlign='center'>
                        <Icon name='settings' />
                        <Header.Content>
                            Bienvenue {props.firstName} {props.lastName}
                            <Header.Subheader>
                                Gérer votre compte
                            </Header.Subheader>
                        </Header.Content>
                </Header>
            </Segment>
            <Segment.Group>
                <Segment>
                    <Grid columns={2} relaxed>
                    <Grid.Column>
                        <UpdateProfileContainer/>
                        <DeleteProfileContainer />
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='red' floated='right' onClick={props.logout}>Log out</Button>
                    </Grid.Column>
                        </Grid>
                </Segment>
                <Segment>
                    <Grid columns={2} relaxed>
                        <Grid.Column>
                            <Segment basic>
                                <Header as="h2">Mes Films</Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <NewMovieContainer/>
                        </Grid.Column>
                    </Grid>
                    <MyMovieCardScene myMovies={props.myMovies} deleteMovie={props.deleteMovie}/>
                </Segment>
                <Segment>
                    <Grid columns={2} relaxed>
                        <Grid.Column>
                            <Segment basic>
                                <Header as="h2">Mes Séries</Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <NewTvshowContainer/>
                        </Grid.Column>
                    </Grid>
                    <MyTvshowCardContainer deleteTvshow={props.deleteTvshow}/>
                </Segment>
            </Segment.Group>
        </Segment.Group>
    </div>
  );
};

export default ProfileScene;