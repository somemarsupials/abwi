import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProject } from '../actions/project';
import { ProjectPage } from '../components/pages';


export class ProjectContainer extends Component {
  async componentDidMount() {
    this.props.fetchProject(this.props.match.params.id);
  };

  render() {
    return (
      <ProjectPage
        project={this.props.response.data} 
        error={this.props.response.error}
        fetching={this.props.fetching}
      />
    );
  };
};

function mapStateToProps(state) {
  return { 
    fetching: state.project.fetching,
    response: state.project.response,
  };
};

function mapDispatchToState(dispatch) {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

export default 
  connect(mapStateToProps, mapDispatchToState)(ProjectContainer);
