import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Header } from './components/header';
import { ProjectsContainer } from './containers';
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
            <Route exact path="/projects" component={ProjectsContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
export { api };
