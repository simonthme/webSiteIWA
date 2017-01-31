/**
 * Created by simonthome on 28/01/2017.
 */
import React, {Component} from 'react';
import { Button, Card, Image, Select, Form, Divider } from 'semantic-ui-react';
import {IntlProvider,FormattedDate, addLocaleData} from 'react-intl';
import fr from 'react-intl/locale-data/fr';
addLocaleData([...fr]);


const TvshowCardScene = (props) => {
  return(
    <Card.Group>
      {
        props.tvShows.map((tvshow, index) => {
          return (
            <Card key={index}>
              <Card.Content>
                <Card.Header>
                  {tvshow.tvShowTitle}
                </Card.Header>
                Acteurs : <br/>
                {
                  tvshow.actors.map((actor, idx) => {
                    return (
                      <Card.Meta key={idx}>
                        {actor}
                      </Card.Meta>
                    )
                  })
                }
                <IntlProvider locale="fr">
                <Card.Description>
                  Saisons: {tvshow.totalSeason}<br/>
                  Catégorie: {tvshow.category}<br/>
                  Date de Production: <FormattedDate  value={tvshow.productionDate}
                                                       /><br/>
                  Date d'ajout: <FormattedDate  value={tvshow.creationDate}
                                                 /><br/>
                </Card.Description>
                </IntlProvider>
                <Card.Description>
                  <Form.Select
                    placeholder="Saison"
                    options={props.seasonOptions}
                    onChange={(e, {value}) => props.updateSeason(e, value, tvshow._id)}
                  />
                  {
                    props.myEpisodes.map((episode,idex) => {
                      if (episode.tvShowId === tvshow._id) {
                        return (
                          <div key={idex}>
                            <Divider/>
                            <p>{episode.episodeTitle}<br/>
                              <a href={episode.downloadLink}>Lien de
                                téléchargment</a>
                              <br/>
                              <a href={episode.subLink}>Lien sous-titres</a>
                              <br/>
                            </p>
                            <Divider/>
                          </div>
                        )
                      } else {
                        return null;
                      }
                    })
                  }
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })
      }
    </Card.Group>
  )
};

export default TvshowCardScene;