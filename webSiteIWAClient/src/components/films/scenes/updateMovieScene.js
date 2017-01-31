/**
 * Created by simonthome on 25/01/2017.
 */
import React,{Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');


const UpdateMovieScene = (props) => {
  return (
    <Modal
      trigger={<Button  basic color='green' onClick={props.handleOpen} >Modifier</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Titre</label>
            <Form.Input placeholder='Titre du film' onChange={props.updateMovieTitle} value={props.movieTitle}/>
          </Form.Field>
          <Form.Field>
            <label>Acteurs (Séparé par des virgules)</label>
            <Form.Input placeholder='Acteurs' onChange={props.updateActors} value={props.actors}/>
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
            <Form.Input placeholder='Lien' onChange={props.updateDownloadLink} value={props.downloadLink}/>
          </Form.Field>
          <Form.Field>
            <label>Lien des sous-titres</label>
            <Form.Input placeholder='Lien' onChange={props.updateSubLink} value={props.subLink}/>
          </Form.Field>
          <Form.Field>
          <label>Date de production</label>
          <DatePicker
            selected={props.startDate}
            onChange={props.updateProdDate}
          />
            </Form.Field>
          <Form.Field>
              </Form.Field>
        </Form>
        <Modal.Actions>
          <container>
        <Button floated='left' onClick={props.updateMovie}>Mettre à jour le film</Button>
            </container>
        </Modal.Actions>
        <br />
      </Modal.Content>
    </Modal>
  )
};

export default UpdateMovieScene;

