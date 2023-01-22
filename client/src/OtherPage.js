import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>FibCalc</p>
      <p>Michał Stolarz</p>
      <p>Grupa dziekańska: 1.5</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};
