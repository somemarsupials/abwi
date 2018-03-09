import React from 'react';
import { showCurrency } from '../../lib';

export default function(props) {
  let items = props.items || [];

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        { items.map(function(item, index) {
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

