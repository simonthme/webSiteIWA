/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {Button, Modal, Form, Dropdown} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');


const NewEpisodeScene = (props) => {
  return (
    <Modal
      trigger={<Button  basic color='red' onClick={props.handleOpen} >Ajouter un Episode</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Titre</label>
            <Form.Input placeholder='Titre episode' onChange={props.updateEpisodeTitle} />
          </Form.Field>
          <Form.Select
            placeholder="Format"
            options={props.formatOptions}
            onChange={props.updateFormat}
            value={props.format}
          >
          </Form.Select>
          <Form.Select
            placeholder="Saison"
            options={props.seasonOptions}
            onChange={props.updateSeason}
          />
          <Form.Field>
            <label>Lien de téléchargement</label>
            <Form.Input placeholder='Lien' onChange={props.updateDownloadLink}/>
          </Form.Field>
          <Form.Field>
            <label>Lien des sous-titres</label>
            <Form.Input placeholder='Lien' onChange={props.updateSubLink}/>
          </Form.Field>
        </Form>
        <Button floated='left' onClick={props.addEpisode}>Valider l'episode</Button>
      </Modal.Content>
    </Modal>
  )
};

export default NewEpisodeScene;