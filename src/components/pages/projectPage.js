import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, PageHeader } from 'react-bootstrap';
import { ItemTable } from '../tables';
import { SubHeader } from '../layout';

export default function(props) {
  let client = props.project && props.project.client;
  let { project } = props;
  let { id: clientId, name: clientName } = client || {};

  return (
    <div>
      <PageHeader>
        {(project && project.title) || 'Unnamed project'}
      </PageHeader>
      { props.fetching && 
        <Alert bsClass='info'>
          Fetching projects...
        </Alert>
      }
      { props.error &&
        <Alert bsClass='info'>
          Could not load project | {props.error}
        </Alert>
      }
      { props.project &&
        <div>
          <SubHeader>
            Client
          </SubHeader>
          <Link to={`/clients/${clientId}`}>{clientName}</Link>
          <SubHeader>
            Items
          </SubHeader>
          <ItemTable items={props.project.items}/>
        </div>
      }
    </div>
  );
};

