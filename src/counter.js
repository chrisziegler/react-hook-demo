import React from 'react';

export default ({ isSignin, value, Increment, Decrement }) => {
  if (isSignin) {
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    );
  }
  return null;
};
