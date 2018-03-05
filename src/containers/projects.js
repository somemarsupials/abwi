import React, { Component } from 'react';
import { connect } from 'react-redux';

import { projectActions } from '../actions';
import { ProjectsOverview } from '../components/projects';


export class Projects extends Component {
  async componentDidMount() {
    let { api, success, fail } = this.props;
    this.props.fetch(api, success, fail);
  };

  render() {
    return (
      <ProjectsOverview
        projects={this.props.projects} 
        error={this.props.error}
      />
    );
  };
};


function mapStateToProps(state) {
  return { 
    projects: state.projects.data,
    error: state.projects.error,
  };
};


function mapDispatchToProps(dispatch) {
  let { fetchedProjects, projectFetchFailed } = projectActions;
  return {
    success: (projects) => {
      dispatch(fetchedProjects(projects))
    },
    fail: (error) => {
      dispatch(projectFetchFailed(error))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
