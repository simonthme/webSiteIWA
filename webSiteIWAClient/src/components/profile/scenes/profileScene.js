/**
 * Created by simonthome on 23/01/2017.
 */
import React, {Component} from 'react';
import {Grid, Button, Header, Segment, Accordion, Icon} from 'semantic-ui-react';
import NewMovieContainer from '../../films/containers/newMovieContainer';
import UpdateProfileContainer from '../containers/updateProfileContainer';
import DeleteProfileContainer from '../containers/deleteProfileContainer';
import MyMovieCardScene from '../../films/scenes/myMovieCardsScene';
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
              <Header.Subheader>Gérer votre compte</Header.Subheader>
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
                <Button color='red' floated='right' onClick={props.logout}>
                  Log out
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment>
            <Accordion>
              <Accordion.Title>
                <Grid columns={3} relaxed>
                  <Grid.Column>
                    <Segment basic>
                      <Header as="h2"><Icon name='dropdown' />
                        Mes Films: {props.getMovieCount()}
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column>
                    <NewMovieContainer/>
                  </Grid.Column>
                </Grid>
              </Accordion.Title>
              <Accordion.Content>
                <MyMovieCardScene myMovies={props.myMovies}
                                  deleteMovie={props.deleteMovie}/>
              </Accordion.Content>
            </Accordion>
          </Segment>
          <Segment>
            <Accordion>
              <Accordion.Title>
                <Grid columns={3} relaxed>
                  <Grid.Column>
                    <Segment basic>
                      <Header as="h2"><Icon name='dropdown' />
                        Mes Séries: {props.getTvshowCount()}
                      </Header>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column>
                    <NewMovieContainer/>
                  </Grid.Column>
                </Grid>
              </Accordion.Title>
              <Accordion.Content>
                <MyTvshowCardContainer deleteTvshow={props.deleteTvshow}/>
              </Accordion.Content>
            </Accordion>
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </div>
  );
};

export default ProfileScene;