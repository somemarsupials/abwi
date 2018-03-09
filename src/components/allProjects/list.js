import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  let projects = props.projects || [];

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { projects.map(function(project, index) {
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
