import React from 'react';

import { Alert, Button, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectTable } from '../tables';
import { ProjectModal } from '../modals';

export default function(props) {
  let clientId, clientName;

  if (props.project && props.project.client) {
    let { id: clientId, name: clientName } = props.project.client;
  } 

  return (
    <div>
      <PageHeader>
        Projects
      </PageHeader>
      { props.fetching &&
        <Alert bsClass='info'>
          Fetching projects...
        </Alert>
      }
      { props.error &&
        <Alert bsClass='error'>
          Could not load projects | {props.error}
        </Alert>
      }
      { props.projects &&
        <div>
          <Link to={`/clients/${clientId}`}>{clientName}</Link>
          <ProjectTable projects={props.projects}/>
        </div>
      }
      <div>
        <Button onClick={props.toggleCreateModal}>Add</Button>
        <ProjectModal show={props.createModal} onHide={props.toggleCreateModal} />
      </div>
    </div>
  );
};
