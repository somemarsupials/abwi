import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import List from './list';

export default function(props) {
  let error = props.error || !props.projects;

  return (
    <div>
      <TitleBar text={'Projects'} /> 
      { props.fetching &&
        <InfoBar text={'Fetching projects...'} />
      }
      { error &&
        <ErrorBar text={'Could not load projects'} detail={props.error} />
      }
      { !props.fetching &&
        <List projects={props.projects} />
      }
    </div>
  );
};
