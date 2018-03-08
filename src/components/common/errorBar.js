import React from 'react';

export default function(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <p>
        <span className="font-weight-bold">{props.text}</span>
        { props.detail ? <span>&emsp;|&emsp;{props.detail}</span> : null }
      </p>
    </div>
  );
};
