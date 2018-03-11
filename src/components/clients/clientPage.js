import React from 'react';

import { TitleBar, InfoBar, ErrorBar } from '../common/';
import ClientDetail from './clientDetail';

export default function(props) {
  let title = props.client && (props.client.name || null);

  return (
    <div>
      <TitleBar text={title} /> 
      { props.fetching && 
        <InfoBar text={'Fetching client...'} />
      }
      { props.error &&
        <ErrorBar text={'Could not load client'} detail={props.error} />
      }
      { props.client &&
        <ClientDetail client={props.client} />
      }
    </div>
  );
};

