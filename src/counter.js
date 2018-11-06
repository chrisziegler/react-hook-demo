import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 10px;
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'orangered' : 'white')};
  color: ${props => (props.primary ? 'white' : 'orangered')};
`;

export default ({ isSignin, value, Increment, Decrement }) => {
  if (isSignin) {
    return (
      <div>
        <h1>{value}</h1>
        <Button primary onClick={Increment}>
          Increment
        </Button>
        <Button onClick={Decrement}>Decrement</Button>
      </div>
    );
  }
  return null;
};
