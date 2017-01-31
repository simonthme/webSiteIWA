/**
 * Created by simonthome on 22/01/2017.
 */
import React,{Component} from 'react';
import TvShowCardScene from '../scenes/tvShowCardScene';
import {Grid, Menu, Input, Dropdown, Header} from 'semantic-ui-react';

const SeriesScene = (props) => {
  return ( <div>
    <Grid celled>
      <Grid.Column stretched width={5}>
    <Menu fluid vertical>
      <Menu.Item>
        <Input
          placeholder='Search...'
          action={<Dropdown floating labeled button className='icon' options={props.options} defaultValue='title' onChange={props.updateSearchSelect} />}
          icon="search"
          iconPosition="left"
          onChange={props.updateSearch}
        />
      </Menu.Item>
      <Menu.Item>
        <Header as='h4'>Categories</Header>
        <Menu.Menu>
          <Menu.Item name='Tous les films' active={props.activeItem === 'Tous les films'} onClick={props.handleItemClick}>
            Tous les films
          </Menu.Item>
          <Menu.Item name='Romantique' active={props.activeItem === 'Romantique'} onClick={props.handleItemClick}>
            Romantique
          </Menu.Item>
          <Menu.Item name='Documentaire' active={props.activeItem === 'Documentaire'} onClick={props.handleItemClick}>
            Documentaires
          </Menu.Item>
          <Menu.Item name='Horreur' active={props.activeItem === 'Horreur'} onClick={props.handleItemClick}>
            Horreur
          </Menu.Item>
          <Menu.Item name='Action' active={props.activeItem === 'Action'} onClick={props.handleItemClick}>
            Action
          </Menu.Item>
          <Menu.Item name='Comedie' active={props.activeItem === 'Comedie'} onClick={props.handleItemClick}>
            Comedie
          </Menu.Item>
          <Menu.Item name='Dessin' active={props.activeItem === 'Dessin'} onClick={props.handleItemClick}>
            Dessins Animés
          </Menu.Item>
          <Menu.Item name='Anime' active={props.activeItem === 'Anime'} onClick={props.handleItemClick}>
            Animés
          </Menu.Item>
          <Menu.Item name='Drame' active={props.activeItem === 'Drame'} onClick={props.handleItemClick}>
            Drame
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
    </Menu>
      </Grid.Column>
      <Grid.Column stretched width={11}>
        <segment>
          <TvShowCardScene
            tvShows={props.tvshows}
            myEpisodes={props.myEpisodes}
            seasonOptions={props.seasonOptions}
            updateSeason={props.updateSeason}
        />
        </segment>
      </Grid.Column>
    </Grid>
  </div>)
};

export default SeriesScene;