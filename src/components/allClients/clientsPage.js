import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import ClientsList from './clientsList';

export default function(props) {
  return (
    <div>
      <TitleBar text={'Clients'} />
      { props.fetching &&
        <InfoBar text={'Fetching clients...'} />
      }
      { props.error &&
        <ErrorBar text={'Could not load clients'} detail={props.error} />
      }
      { props.clients &&
        <ClientsList clients={props.clients} />
      }
    </div>
  );
};
