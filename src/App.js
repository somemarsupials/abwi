import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { ProjectsContainer } from './containers';
import './App.css';

let api;

if (window.location.hostname === 'localhost') {
  api = 'http://localhost:5000';
} else {
  api = 'https://http://abwi.herokuapp.com';
};

let buildProjects = function(props) { 
  return <ProjectsContainer {...props} />
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>

          <div>
            <Route exact path="/projects/:id" component={buildProjects} />
            <Route exact path="/projects" component={buildProjects} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
export { api };
