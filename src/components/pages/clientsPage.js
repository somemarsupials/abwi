import React from 'react';
import { Alert, PageHeader } from 'react-bootstrap';
import { ClientTable } from '../tables';
import { ClientModalContainer } from '../../containers';

export default function(props) {
  return (
    <div>
      <div>
        <PageHeader>
          Clients
        </PageHeader>
        { props.fetching &&
          <Alert bsStyle='info'>
            Fetching clients...
          </Alert>
        }
        { props.error &&
          <Alert bsStyle='danger'>
            Could not load clients | {props.error}
          </Alert>
        }
        { props.clients &&
          <ClientTable clients={props.clients} />
        }
      </div>
      <ClientModalContainer />
    </div>
  );
};
