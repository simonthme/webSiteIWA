/**
 * Created by simonthome on 24/01/2017.
 */
import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import UpdateMovieContainer from '../containers/updateMovieContainer';

const MovieCardsScene = (props) => {
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
                <Card.Description>
                  Format: {movie.format}<br/>
                  Catégorie: {movie.category}<br/>
                  <a href={movie.downloadLink}>Lien de téléchargement</a><br/>
                  <a href={movie.subLink}>Lien de sous-titre</a><br/>
                  Date de Production: {movie.productionDate}<br/>
                  Date d'ajout: {movie.creationDate}<br/>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <UpdateMovieContainer movie={movie} movieIndex={index}/>
                  <Button basic color='red'>Supprimer le film</Button>
                </div>
              </Card.Content>
            </Card>
          );
        })
      }
    </Card.Group>
  )
};

export default MovieCardsScene;