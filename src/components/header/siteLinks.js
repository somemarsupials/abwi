import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <ul className="nav navbar-nav">
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/clients">Clients</Link></li>
    </ul>
  );
};
