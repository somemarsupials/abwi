import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Project, Projects } from './containers';
import { fetcher } from './lib';
import './App.css';

const api = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://http://abwi.herokuapp.com';

let buildProjects = function(props) { 
  return <Projects {...props} fetch={fetcher} api={api} /> 
};

let buildProject = function(props) { 
  return <Project {...props} fetch={fetcher} api={api} /> 
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/project">Projects</Link></li>
            </ul>
          </nav>

          <div>
            <Route exact path="/project/:id" component={buildProject} />
            <Route exact path="/project" component={buildProjects} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
