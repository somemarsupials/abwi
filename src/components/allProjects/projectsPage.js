import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import ProjectsList from './projectsList';

export default function(props) {
  return (
    <div>
      <TitleBar text={'Projects'} /> 
      { props.fetching &&
        <InfoBar text={'Fetching projects...'} />
      }
      { props.error &&
        <ErrorBar text={'Could not load projects'} detail={props.error} />
      }
      { props.projects &&
        <ProjectsList projects={props.projects} />
      }
    </div>
  );
};
