/**
 * Created by simonthome on 22/01/2017.
 */
import React, {Component} from 'react';
import {Button, Modal, Form, Message} from 'semantic-ui-react';

const RegisterScene = (props) => {
  return (
    <Modal
      trigger={<Button color='instagram' onClick={props.handleOpen}>Register</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <h1>Sign up</h1>
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Input placeholder='First Name' name='firstname' onChange={props.updateFirstName} />
            <Form.Input placeholder='Name' name='name' onChange={props.updateLastName}/>
          </Form.Group>
          <Form.Field>
            <input placeholder='Username' onChange={props.updateUsername}/>
          </Form.Field>
          <Form.Field>
            <input type='password' placeholder='Password' onChange={props.updatePassword}/>
          </Form.Field>
          <Form.Field>
            <input type='password' placeholder='Confirm Password' onChange={props.updateConfirmPassword} />
          </Form.Field>
          <Form.Checkbox label='I agree to the Terms and Conditions' onChange={props.updateCheck} />
          <br />
        </Form>
        <Button floated='left' onClick={props.register}>Register</Button>
        <br />
        <Message negative
               hidden={props.messageVisible}
               onDismiss={props.dismissMessage}>
          <Message.Header>{props.errorMessage}</Message.Header>
        </Message>
      </Modal.Content>
    </Modal>
  );
};

export default RegisterScene;