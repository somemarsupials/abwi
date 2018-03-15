import React from 'react';
import { Alert } from 'react-bootstrap';
import { showCurrency } from '../../lib';

export default function(props) {
  if (!(props.items && props.items.length)) {
    return (
      <Alert bsStyle='info'>
        No items found
      </Alert>
    );
  };

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map(function(item, index) {
          return (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{showCurrency(item.value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

