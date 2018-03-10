import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './components/header';
import { 
  ProjectsContainer, 
  ProjectContainer, 
  ClientsContainer 
} from './containers';

import './App.css';

let api;

if (window.location.hostname === 'localhost') {
  api = 'http://localhost:5000';
} else {
  api = 'https://http://abwi.herokuapp.com';
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="App">
            <Route exact path="/clients" component={ClientsContainer} />
            <Route exact path="/projects" component={ProjectsContainer} />
            <Route exact path="/projects/:id" component={ProjectContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
export { api };
