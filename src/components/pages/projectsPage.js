import React from 'react';

import { Alert, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectTable } from '../tables';
import { ProjectModalContainer } from '../../containers';

export default function(props) {
  let client = (props.project && props.project.client) || {};

  return (
    <div>
      <PageHeader>
        Projects
      </PageHeader>
      { props.fetching &&
        <Alert bsStyle='info'>
          Fetching projects...
        </Alert>
      }
      { props.error &&
        <Alert bsStyle='danger'>
          Could not load projects | {props.error}
        </Alert>
      }
      { props.projects &&
        <div>
          <Link to={`/clients/${client.id}`}>{client.name}</Link>
          <ProjectTable projects={props.projects}/>
        </div>
      }
      <div>
        <ProjectModalContainer />
      </div>
    </div>
  );
};
