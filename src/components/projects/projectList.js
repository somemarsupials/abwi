import React from 'react';

export default function(props) {
  let { projects } = props;

  if (!projects) {
    return null;
  };

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { projects.map(function(project, index) {
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
