import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import List from './list';

export default function(props) {
  let error = props.error || !props.projects;

  return (
    <div>
      <TitleBar text={'Projects'} /> 
      { error &&
        <ErrorBar text={'Could not find projects'} detail={props.error} />
      }
      { !error && props.fetching && 
        <InfoBar text={'Fetching projects...'} />
      }
      { !error && !props.fetching &&
        <List projects={props.projects} />
      }
    </div>
  );
};
