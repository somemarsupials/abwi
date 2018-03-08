import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import ProjectList from './projectList';

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
        <ProjectList projects={props.projects} />
      }
    </div>
  );
};
