import React from 'react';

import { TitleBar, InfoBar, ErrorBar, Button } from '../common/';
import Detail from './detail';

export default function(props) {
  let error = props.error || !props.project;
  let title = props.project && props.project.title || null;

  return (
    <div>
      <TitleBar text={title} /> 
      { error &&
        <ErrorBar text={'Could not load project'} detail={props.error} />
      }
      { !error && props.fetching && 
        <InfoBar text={'Fetching project...'} />
      }
      { !error && !props.fetching &&
        <Detail project={props.project} />
      }
    </div>
  );
};

