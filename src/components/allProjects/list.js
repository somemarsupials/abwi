import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  if (!props.projects || props.projects.length === 0) {
    return (<span>No projects found</span>);
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
