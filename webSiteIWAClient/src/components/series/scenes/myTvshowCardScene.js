/**
 * Created by simonthome on 27/01/2017.
 */
import React, {Component} from 'react';
import { Button, Card, Image, Select, Form, Divider } from 'semantic-ui-react';
import {IntlProvider,FormattedDate} from 'react-intl';
import UpdateTvshowContainer from '../containers/updateTvshowContainer';
import NewEpisodeContainer from '../containers/newEpisodeContainer';



const MyTvshowCardScene = (props) => {
  return(
    <Card.Group>
      {
        props.myTvshows.map((tvshow, index) => {
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
                      return(
                        <div key={idex}>
                          <Divider/>
                          <p>{episode.episodeTitle}<br/>
                            <a href={episode.downloadLink}>Lien de téléchargment</a>
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
              <Card.Content extra>
                <div className='ui two buttons'>
                  <UpdateTvshowContainer tvshow={tvshow} tvshowIndex={index}/>
                  <Button basic color='red' onClick={() => {props.deleteTvshow(tvshow, index)}}>Supprimer la série</Button>
                  <NewEpisodeContainer tvShowId={tvshow._id} />
                </div>
              </Card.Content>
              </Card.Content>
            </Card>
          );
        })
      }
    </Card.Group>
  )
};

export default MyTvshowCardScene;