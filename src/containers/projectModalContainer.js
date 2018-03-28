import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectModal } from '../components/modals';

import { toggleProjectModal, titleChange, descriptionChange, clientChange } 
  from '../actions/projectModal';

import { createProject } from '../actions/projectModal';

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
  return state.projectModal;
};

function mapDispatchToState(dispatch) {
  return {
    toggle: () => dispatch(toggleProjectModal()),
    titleChange: string => dispatch(titleChange(string)),
    descriptionChange: string => dispatch(descriptionChange(string)),
    clientChange: string => dispatch(clientChange(string)),
    onSubmit: (name, params) => dispatch(createProject(name, params)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectFormContainer)
