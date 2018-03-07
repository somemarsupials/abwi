import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../actions';
import { ProjectsOverview } from '../components/projects';


export class ProjectsContainer extends Component {
  async componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    return (
      <ProjectsOverview
        projects={this.props.projects} 
        error={this.props.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    projects: state.projects.data,
    error: state.projects.error,
    fetching: state.projects.fetching,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectsContainer);
