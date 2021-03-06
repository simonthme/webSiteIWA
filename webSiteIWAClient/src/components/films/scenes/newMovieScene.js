/**
 * Created by simonthome on 23/01/2017.
 */
import React,{Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');


const NewMovieScene = (props) => {
  return (
    <Modal
      trigger={<Button  floated='right' onClick={props.handleOpen} icon="plus"></Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Titre</label>
            <Form.Input placeholder='Titre du film' onChange={props.updateMovieTitle} />
          </Form.Field>
          <Form.Field>
            <label>Acteurs (Séparés par des virgules)</label>
            <Form.Input placeholder='Acteurs' onChange={props.updateActors}/>
          </Form.Field>
          <Form.Select
          placeholder="Format"
          options={props.formatOptions}
          onChange={props.updateFormat}
          value={props.format}
          >
          </Form.Select>
          <Form.Select
          placeholder="Catégorie"
          options={props.categoryOptions}
          onChange={props.updateCategory}
          value={props.category}
          >
          </Form.Select>
          <Form.Field>
            <label>Lien de téléchargement</label>
            <Form.Input placeholder='Lien' onChange={props.updateDownloadLink}/>
          </Form.Field>
          <Form.Field>
            <label>Lien des sous-titres</label>
            <Form.Input placeholder='Lien' onChange={props.updateSubLink}/>
          </Form.Field>
          <Form.Field>
            <label>Date de production</label>
            <DatePicker
            selected={props.startDate}
            onChange={props.updateProdDate}
            />
            </Form.Field>
          <Form.Field>
            <Button floated='left' onClick={props.addMovie}>Valider</Button>
          </Form.Field>
          <br />
        </Form>
      </Modal.Content>
    </Modal>
  )
};

export default NewMovieScene;