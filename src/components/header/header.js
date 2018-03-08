import React from 'react';
import SiteLinks from './siteLinks';

export default function(props) {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        <a className="navbar-brand" href="/">ABWI</a>
        <SiteLinks />
      </ul>
    </nav>
  );
};
