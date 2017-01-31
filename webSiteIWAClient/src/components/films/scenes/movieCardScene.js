/**
 * Created by simonthome on 27/01/2017.
 */
import React, {Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import {IntlProvider,FormattedDate} from 'react-intl';
import frenchLocaleData from 'react-intl/locale-data/fr';

const MovieCardScene = (props) => {
  return(
    <Card.Group>
      {
        props.movies.map((movie, index) => {
          console.log(movie);
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
                <IntlProvider locale={'fr'}>
                <Card.Description>
                  Format: {movie.format}<br/>
                  Catégorie: {movie.category}<br/>
                  <a href={movie.downloadLink}>Lien de téléchargement</a><br/>
                  <a href={movie.subLink}>Lien de sous-titre</a><br/>
                  Date de Production: <FormattedDate  value={movie.productionDate}
                                                       /><br/>
                  Date d'ajout: <FormattedDate  value={movie.creationDate}
                                                 /><br/>
                </Card.Description>
                </IntlProvider>
              </Card.Content>
            </Card>
          );
        })
      }
    </Card.Group>
  )
};

export default MovieCardScene;