/**
 * Created by simonthome on 14/12/2016.
 */
import React, {Component} from 'react';
import {Button, Modal, Form, FormField} from 'semantic-ui-react';
import ReactDOM from 'react-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  updateValue() {
    this.setState({
      username: ReactDOM.findDOMNode(this.refs.username).value,
      password: ReactDOM.findDOMNode(this.refs.password).value,
    });
    console.log('username: ' + this.state.username);
    console.log('password : ' + this.state.password);
  }

  render() {
    return (
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' onChange={this.updateValue.bind(this)} ref="username"/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' onChange={this.updateValue.bind(this)} ref="password"/>
          </Form.Field>
          <Form.Field>
            <Button floated='left' type='submit' onPress>Sign in</Button>
            <Button floated='right'>Sign up</Button>
          </Form.Field>
        </Form>
      </Modal.Content>)
  }

}