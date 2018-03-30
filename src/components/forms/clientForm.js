import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } 
  from 'react-bootstrap';

export default function(props) {
  let project = props.project || {};
  let error = props.error || { fields: {} };

  return (
    <Form>
      <FormGroup validationState={error.fields.name ? 'error' : null}>
        <ControlLabel>
          Client name
        </ControlLabel>
        <FormControl 
          type='text' 
          placeholder='Enter name...'
          value={project.name}
          onChange={props.nameChange}
        />
        <HelpBlock>
          {error.fields.name}
        </HelpBlock>
      </FormGroup>
    </Form>
  );
};
