import React from 'react';

export default function(props) {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { props.projects.map(function(project, index) {
          return (
            <tr key={index}>
              <td>{project.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
