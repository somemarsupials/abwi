import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import ProjectList from './projectList';

export default function(props) {
  console.log(props);
  if (props.error || !props.projects) {
    return (<ErrorBar 
        text={'Could not find projects'}
        detail={props.error}
    />);
  };

  if (props.fetching) {
    return (<InfoBar text={'Fetching projects...'} />);
  };

  return (
    <div>
      <TitleBar text={'Projects'} /> 
      <ProjectList 
        projects={props.projects} 
      />
    </div>
  );
};
