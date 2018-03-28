import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function(props) {
  let project = props.project || {};

  return (
    <Form>
      <FormGroup>
        <ControlLabel>
          Project title
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Enter title...'
          value={project.title}
          onChange={props.titleChange}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Project description
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Enter description...'
          value={project.description}
          onChange={props.descriptionChange}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Client name
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Enter name...'
          value={project.client && project.client.name}
          onChange={props.clientChange}
        />
      </FormGroup>
    </Form>
  );
};
