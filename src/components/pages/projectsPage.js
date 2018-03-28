import React from 'react';

import { Alert, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectTable } from '../tables';
import { ProjectModalContainer } from '../../containers';

export default function(props) {
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
        <ProjectTable projects={props.projects}/>
      }
      <div>
        <ProjectModalContainer />
      </div>
    </div>
  );
};
