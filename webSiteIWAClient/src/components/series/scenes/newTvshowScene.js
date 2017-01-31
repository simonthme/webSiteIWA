/**
 * Created by simonthome on 27/01/2017.
 */
import React,{Component} from 'react';
import {Button, Modal, Form, Message} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');


const NewTvshowScene = (props) => {
  return (
    <Modal
      trigger={<Button floated='right' onClick={props.handleOpen} icon="plus" ></Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Titre</label>
            <Form.Input placeholder='Titre de la serie' onChange={props.updateTvshowTitle} />
          </Form.Field>
          <Form.Field>
            <label>Acteurs (Séparés par des virgules)</label>
            <Form.Input placeholder='Acteurs' onChange={props.updateActors}/>
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
            <Form.Field>
            </Form.Field>
            <Form.Field>
            </Form.Field>
        </Form>
        <Button floated='left' onClick={props.addTvshow}>Valider</Button>
        <Message negative
                 hidden={props.messageVisible}
                 onDismiss={props.dismissMessage}>
          <Message.Header>{props.errorMessage}</Message.Header>
        </Message>
      </Modal.Content>
    </Modal>
  )
};

export default NewTvshowScene;