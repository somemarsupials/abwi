import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects, toggleCreateProjectModal } 
  from '../actions/allProjects';

import { ProjectsPage } from '../components/allProjects';


export class ProjectsContainer extends Component {
  async componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    return (
      <ProjectsPage {...this.props} />
    );
  };
};

function mapStateToProps(state) {
  return { 
    projects: state.projects.data,
    error: state.projects.error,
    fetching: state.projects.fetching,
    createModal: state.projects.createModal,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    toggleCreateModal: () => dispatch(toggleCreateProjectModal(true))
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectsContainer);
