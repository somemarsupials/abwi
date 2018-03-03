import React, { Component } from 'react';
import { TitleBar } from '../components/common/';
import { ProjectList } from '../components/projects';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  async componentWillMount() {
    let response = await this.props.fetch(`${this.props.api}/project`);
    let json = await response.json();
    this.setState({ projects: json });
  };

  render() {
    return (
      <div>
        <TitleBar text={'Projects'} /> 
        <ProjectList projects={this.state.projects} />
      </div>
    );
  };
};

export default Projects;
