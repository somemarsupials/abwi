import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import List from './list';

export default function(props) {
  let error = props.error || !props.clients;

  return (
    <div>
      <TitleBar text={'Clients'} />
      { props.fetching &&
        <InfoBar text={'Fetching clients...'} />
      }
      { error &&
        <ErrorBar text={'Could not load clients'} detail={props.error} />
      }
      { !props.fetching &&
        <List clients={props.clients} />
      }
    </div>
  );
};
