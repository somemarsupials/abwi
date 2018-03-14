import React from 'react';

import { TitleBar, ErrorBar, InfoBar } from '../common/';
import { Button } from 'react-bootstrap';
import ProjectsList from './projectsList';
import ProjectModal from './projectModal';

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
      <div>
        <Button onClick={props.toggleCreateModal}>Add</Button>
        <ProjectModal show={props.createModal} onHide={props.toggleCreateModal} />
      </div>
    </div>
  );
};
