import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Projects } from './containers';
import './App.css';

const api = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : 'https://http://abwi.herokuapp.com';

let Home = (props) => (<h1>Home</h1>);

let buildProjects = function() { 
  return <Projects fetch={fetch.bind(this)} api={api} /> 
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={buildProjects} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
export { api };
