/**
 * Created by maicaz on 26/12/2016.
 */
import React, {Component} from 'react';
import {Button, Modal, Form, FormField} from 'semantic-ui-react';
import ReactDOM from 'react-dom';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            firstname: '',
            username: '',
            password: '',
        };
    }

    updateValue() {
        this.setState({
            name: ReactDOM.findDOMNode(this.refs.name).value,
            firstname: ReactDOM.findDOMNode(this.refs.firstname).value,
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
                        <h1>Sign up</h1>
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Input placeholder='First Name' name='firstname' onChange={this.updateValue.bind(this)} ref="firstname" />
                        <Form.Input placeholder='Name' name='name' onChange={this.updateValue.bind(this)} ref="name" />
                    </Form.Group>
                    <Form.Field>
                        <input placeholder='Username' onChange={this.updateValue.bind(this)} ref="username"/>
                    </Form.Field>
                    <Form.Field>
                        <input type='password' placeholder='Password' onChange={this.updateValue.bind(this)} ref="password"/>
                    </Form.Field>
                    <Form.Field>
                        <input type='password' placeholder='Confirm Password' />
                    </Form.Field>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Field>
                        <Button floated='left' type='submit' onPress>Register</Button>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                </Form>
            </Modal.Content>
        )
    }

}