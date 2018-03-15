import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function(props) {
  if (!(props.projects && props.projects.length)) {
    return (
      <Alert bsStyle='info'>
        No projects found
      </Alert>
    );
  };

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { props.projects.map(function(project, index) {
          return (
            <tr key={index}>
              <td>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
