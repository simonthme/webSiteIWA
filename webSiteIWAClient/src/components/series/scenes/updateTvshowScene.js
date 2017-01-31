/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {Button, Modal, Form, Dropdown} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');


const UpdateTvshowScene = (props) => {
  return (
    <Modal
      trigger={<Button  basic color='green' onClick={props.handleOpen} >Modifier la série</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Titre</label>
            <Form.Input placeholder='Titre de la série' onChange={props.updateTvshowTitle} value={props.tvshowTitle}/>
          </Form.Field>
          <Form.Field>
            <label>Acteurs (Séparé par des virgules)</label>
            <Form.Input placeholder='Acteurs' onChange={props.updateActors} value={props.actors}/>
          </Form.Field>
          <Form.Select
            placeholder="Catégorie"
            options={props.categoryOptions}
            onChange={props.updateCategory}
            value={props.category}
          >
          </Form.Select>
          <Form.Field>
          <label>Date de production</label>
          <DatePicker
            selected={props.startDate}
            onChange={props.updateProdDate}
          />
            </Form.Field>
        </Form>
        <Modal.Actions>
          <container>
          <Button floated='left' onClick={props.updateTvshow}>Mettre à jour le film</Button>
            </container>
        </Modal.Actions>
        <br />
      </Modal.Content>
    </Modal>
  )
};

export default UpdateTvshowScene;

