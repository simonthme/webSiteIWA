/**
 * Created by simonthome on 24/01/2017.
 */

import React, {Component} from 'react';
import {Button, Modal, Icon} from 'semantic-ui-react';

const DeleteProfileScene = (props) => {
  return (
    <Modal
      trigger={<Button color='google plus' floated='left' onClick={props.handleOpen}>Supprimer votre profil</Button>}
      open={props.modalOpen}
      onOpen={props.handleOpen}
      onClose={props.handleClose}
      closeIcon='close'
      basic
    >
      <Modal.Content>
        <p>Etes-vous sûr de vouloir supprimer votre compte ?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' onClick={props.handleClose} inverted>
          <Icon name='remove' /> Non
        </Button>
        <Button basic color='green' onClick={props.deleteProfile} inverted>
          <Icon name='checkmark' /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteProfileScene;