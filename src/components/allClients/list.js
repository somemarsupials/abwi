import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
  if (!props.clients || props.clients.length == 0) {
    return (<span>No clients found</span>);
  };

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { props.clients.map(function(client, index) {
          return (
            <tr key={index}>
              <td>
                <Link to={`/clients/${client.id}`}>{client.name}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
