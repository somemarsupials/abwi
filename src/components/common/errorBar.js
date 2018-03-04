import React from 'react';

export default function(props) {
  return (
    <div>
      <p>{props.message}</p>
      { props.detail ? <p>{props.detail}</p> : null }
    </div>
  );
};
