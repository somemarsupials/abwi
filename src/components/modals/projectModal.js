import React from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { ProjectForm } from '../forms';

export default function(props) {
  let onSubmit = function() {
    props.onSubmit(props.client, {
      title: props.title,
      description: props.description,
    });
  };

  return (
    <div>
      <Button onClick={props.toggle}>Add</Button>
      <Modal onHide={props.toggle} show={props.show}>
        <Modal.Header>
          <h4>Create project</h4>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm {...props} />
          { props.error &&
            <Alert bsStyle='danger'>
              Error in creating project: {props.error}
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
