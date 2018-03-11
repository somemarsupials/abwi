import React from 'react';
import { SectionBar } from '../common';
import { ProjectsList } from '../allProjects';

export default function(props) {
  return (
    <div>
      <SectionBar text={'Client'} />
      <span>{props.project.client.name}</span>
      <SectionBar text={'Items'} />
      <ProjectsList items={props.project.items}/>
    </div>
  );
};
