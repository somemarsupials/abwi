import React, { Component } from 'react';
import { connect } from 'react-redux';

import { projectActions } from '../actions';
import { ProjectPage } from '../components/projects';


export class Projects extends Component {
  async componentDidMount() {
    let response; 

    try {
      response = await this.props.fetch(`${this.props.api}/project`);
    } 
    catch (error) {
      return this.props.cannotFetch(error.message);
    };

    return response.ok
      ? this.props.fetchedProjects(await response.json())
      : this.props.cannotFetch(`Got status ${response.status}`);
  };

  render() {
    return (
      <ProjectPage
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
    fetchedProjects: (projects) => {
      dispatch(fetchedProjects(projects))
    },
    cannotFetch: (error) => {
      dispatch(projectFetchFailed(error))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
