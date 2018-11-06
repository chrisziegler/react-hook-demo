import React, { useState } from 'react';
import './App.css';
import Signin from './signin';
import Counter from './counter';
import useSigninStatus from './status';
import styled from 'styled-components';

const Header = styled.h1`
  color: midnightblue;
  font-size: 1.6rem;
`;

const Span = styled.span`
  font-style: italic;
  filter: brightness(130%);
`;

function App(props) {
  // destructure the 2 elements off useState passed an initial value of 0
  const [value, Setvalue] = useState(0);

  // default app to being signed-out with hook
  let status = useSigninStatus(false);
  console.log(status);

  function Incvalue() {
    return Setvalue(value + 1);
  }

  function Decvalue() {
    return Setvalue(value - 1);
  }

  return (
    <div className="App">
      <Header>
        React <Span>v16.7.0-alpha</Span> Hooks Demo
      </Header>
      <div className="App-header">
        <Signin {...status} />
        <Counter
          isSignin={status.isSignin}
          value={value}
          Increment={Incvalue}
          Decrement={Decvalue}
        />
      </div>
    </div>
  );
}

export default App;
