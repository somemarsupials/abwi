import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function(props) {
  return (
    <Modal onHide={props.onHide} show={props.show}>
      <Modal.Header>
        <h4>Create project</h4>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close without saving</Button>
      </Modal.Footer>
    </Modal>
  );
};
