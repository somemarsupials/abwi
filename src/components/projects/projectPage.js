import React from 'react';

import { TitleBar, InfoBar, ErrorBar } from '../common/';
import ProjectDetail from './projectDetail';

export default function(props) {
  let title = props.project && (props.project.title || null);

  return (
    <div>
      <TitleBar text={title} /> 
      { props.fetching && 
        <InfoBar text={'Fetching project...'} />
      }
      { props.error &&
        <ErrorBar text={'Could not load project'} detail={props.error} />
      }
      { props.project &&
        <ProjectDetail project={props.project} />
      }
    </div>
  );
};

