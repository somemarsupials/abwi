import React from 'react';
import { ProjectsList } from '../allProjects';
import { SectionBar } from '../common';

export default function(props) {
  return (
    <div>
      <SectionBar text={'Projects'} />
      <ProjectsList projects={props.client.projects} />
    </div>
  );
};
