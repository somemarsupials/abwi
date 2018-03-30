import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } 
  from 'react-bootstrap';

export default function(props) {
  let project = props.project || {};
  let error = props.error || { fields: {} };

  return (
    <Form>
      <FormGroup validationState={error.fields.title ? 'error' : null}>
        <ControlLabel>
          Project title
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Enter title...'
          value={project.title}
          onChange={props.titleChange}
        />
        <HelpBlock>
          {error.fields.title}
        </HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Project description
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Optional'
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
