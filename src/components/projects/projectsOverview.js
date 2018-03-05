import React from 'react';

import { TitleBar, ErrorBar } from '../common/';
import ProjectList from './projectList';

export default function(props) {
  if (props.error || !props.projects) {
    return (<ErrorBar 
        message={'Could not find projects'}
        detail={props.error}
    />);
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
