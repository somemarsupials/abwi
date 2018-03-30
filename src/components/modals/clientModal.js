import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { ClientForm } from '../forms';

export default function(props) {
  let onSubmit = function() {
    props.onSubmit({
      name: props.name
    });
  };

  return (
    <div>
      <Button onClick={props.toggle}>Add</Button>
      <Modal onHide={props.toggle} show={props.show}>
        <Modal.Header>
          <h4>Create client</h4>
        </Modal.Header>
        <Modal.Body>
          <ClientForm {...props} />
          { props.error &&
            <Alert bsStyle='danger'>
              Could not create client
            </Alert>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button bsClass='btn btn-primary' onClick={onSubmit}>
            Submit
          </Button>
          <Button onClick={props.toggle}>
            Close without saving
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
