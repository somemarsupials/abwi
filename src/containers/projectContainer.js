import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProject } from '../actions/projects';
import { ProjectPage } from '../components/projects';


export class ProjectContainer extends Component {
  async componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  };

  render() {
    return (
      <ProjectPage
        project={this.props.project} 
        error={this.props.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    project: state.project.data,
    error: state.project.error,
    fetching: state.project.fetching,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectContainer);
