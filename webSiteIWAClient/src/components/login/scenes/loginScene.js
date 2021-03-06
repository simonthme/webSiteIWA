/**
 * Created by simonthome on 22/01/2017.
 */
import React, {Component} from 'react';
import {Button, Modal, Form, Container, Message} from 'semantic-ui-react';


const LoginScene = (props) => {
  return (
  <container>
    <Modal
      trigger={<Button  color='green' onClick={props.handleOpen} >Login</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
    >
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Form.Input placeholder='Username' onChange={props.updateUsername} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input type='password' placeholder='Password' onChange={props.updatePassword}/>
          </Form.Field>
          <br />
        </Form>
        <Button floated='left' onClick={props.login}>Sign in</Button>
        <br />
        <Message negative
                 hidden={props.messageVisible}
                 onDismiss={props.dismissMessage}>
          <Message.Header>{props.errorMessage}</Message.Header>
        </Message>
      </Modal.Content>
    </Modal>
  </container>
  );

};

export default LoginScene;