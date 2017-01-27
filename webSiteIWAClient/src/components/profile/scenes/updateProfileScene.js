/**
 * Created by simonthome on 23/01/2017.
 */
/**
 * Created by simonthome on 22/01/2017.
 */
import React, {Component} from 'react';
import {Button, Modal, Form, FormField} from 'semantic-ui-react';

const UpdateProfileScene = (props) => {
  return (
    <Modal
      trigger={<Button floated='right' onClick={props.handleOpen}>Modifier votre profil</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <h1>Mettre à jour le profil</h1>
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Input placeholder='First Name' name='firstname' onChange={props.updateFirstName} value={props.firstName}/>
            <Form.Input placeholder='Name' name='name' onChange={props.updateLastName} value={props.lastName}/>
          </Form.Group>
          <Form.Field>
            <input placeholder='Username' onChange={props.updateUsername} value={props.userName}/>
          </Form.Field>
          <Form.Field>
            <input type='password' placeholder='Password' onChange={props.updatePassword}/>
          </Form.Field>
          <Form.Field>
            <input type='password' placeholder='Confirm Password' />
          </Form.Field>
        </Form>
        <Button floated='left' onClick={props.updateUser}>Modifier</Button>
      </Modal.Content>
    </Modal>
  );
};

export default UpdateProfileScene;