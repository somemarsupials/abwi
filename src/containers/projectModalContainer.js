import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectModal } from '../components/modals';

import { 
  toggleProjectModal, descriptionChange, clientChange 
} from '../actions/projectModal';

import { createProject } from '../actions/projects';

class ProjectFormContainer extends Component {
  componentWillMount() {
    this.props.descriptionChange(null)
    this.props.clientChange(null)
  };

  render() {
    return (
      <ProjectModal {...this.props} />
    );
  };
};

function mapStateToProps(state) {
  return {
    show: state.projectModal.show,
    description: state.projectModal.description,
    client: state.projectModal.client,
  };
};

function mapDispatchToState(dispatch) {
  return {
    toggle: () => dispatch(toggleProjectModal()),
    descriptionChange: string => dispatch(descriptionChange(string)),
    clientChange: string => dispatch(clientChange(string)),
    onSubmit: params => dispatch(createProject(params)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectFormContainer)
