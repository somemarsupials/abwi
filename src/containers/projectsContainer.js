import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../actions/projects';
import { ProjectsPage } from '../components/pages';


export class ProjectsContainer extends Component {
  async componentDidMount() {
    this.props.fetchProjects();
  };

  render() {
    return (
      <ProjectsPage
        projects={this.props.response.data}
        error={this.props.response.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    fetching: state.projects.fetching,
    response: state.projects.response,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectsContainer);
