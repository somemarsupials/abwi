import React from 'react';
import { Alert, PageHeader } from 'react-bootstrap';
import { ProjectTable } from '../tables';
import { SubHeader } from '../layout';

export default function(props) {
  let title = props.client && (props.client.name || null);

  return (
    <div>
      <PageHeader>
        {title}
      </PageHeader>
      { props.fetching && 
        <Alert bsStyle='info'>
          Fetching client...
        </Alert>
      }
      { props.error &&
        <Alert bsStyle='danger'>
          Could not load client | {props.error}
        </Alert>
      }
      { props.client &&
        <div>
          <SubHeader>
            Projects
          </SubHeader>
          <ProjectTable projects={props.client.projects} />
        </div>
      }
    </div>
  );
};

