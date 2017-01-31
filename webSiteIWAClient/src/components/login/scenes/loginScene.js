/**
 * Created by simonthome on 22/01/2017.
 */
import React, {Component} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import RegisterContainer from '../../register/containers/registerContainer';


const LoginScene = (props) => {
  return (
    <Modal
      trigger={<Button  basic color='green' onClick={props.handleOpen} >Login</Button>}
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
      </Form>
          <Button floated='left' onClick={props.login}>Sign in</Button>
          <Modal.Actions>
            <RegisterContainer/>
          </Modal.Actions>
    </Modal.Content>
  </Modal>
  );

};

export default LoginScene;