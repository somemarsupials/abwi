import React from 'react';

import { TitleBar, InfoBar, ErrorBar } from '../common/';
import Detail from './detail';

export default function(props) {
  let error = props.error || !props.project;
  let title = props.project && (props.project.title || null);

  return (
    <div>
      <TitleBar text={title} /> 
      { props.fetching && 
        <InfoBar text={'Fetching project...'} />
      }
      { error &&
        <ErrorBar text={'Could not load project'} detail={props.error} />
      }
      { !props.fetching &&
        <Detail project={props.project} />
      }
    </div>
  );
};

