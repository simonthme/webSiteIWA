/**
 * Created by simonthome on 24/01/2017.
 */
import React, {Component} from 'react';
import { Button, Card} from 'semantic-ui-react';
import UpdateMovieContainer from '../containers/updateMovieContainer';
import {IntlProvider,FormattedDate} from 'react-intl';

const MyMovieCardsScene = (props) => {
  return(
    <Card.Group>
      {
        props.myMovies.map((movie, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Card.Header>
                  {movie.movieTitle}
                </Card.Header>

                  {
                    movie.actors.map((actor, idx) => {
                      return (
                        <Card.Meta key={idx}>
                          {actor}
                        </Card.Meta>
                      )
                    })
                  }
                <IntlProvider locale={"fr"}>
                <Card.Description>
                  Format: {movie.format}<br/>
                  Catégorie: {movie.category}<br/>
                  <a href={movie.downloadLink}>Lien de téléchargement</a><br/>
                  <a href={movie.subLink}>Lien de sous-titres</a><br/>
                  Date de Production: <FormattedDate  value={movie.productionDate}
                                                      format="short" /><br/>
                  Date d'ajout: <FormattedDate  value={movie.creationDate}
                                                format="short" /><br/>
                </Card.Description>
                </IntlProvider>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <UpdateMovieContainer movie={movie} movieIndex={index}/>
                  <Button.Or />
                  <Button basic color='red' onClick={() => {props.deleteMovie(movie, index)}}>Supprimer</Button>
                </div>
              </Card.Content>
            </Card>
          );
        })
      }
    </Card.Group>
  )
};

export default MyMovieCardsScene;