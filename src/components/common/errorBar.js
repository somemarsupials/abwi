import React from 'react';

export default function(props) {
  return (
    <div>
      <p>{props.text}</p>
      { props.detail ? <p>{props.detail}</p> : null }
    </div>
  );
};
