import React, { useState } from 'react';
import './App.css';
import Signin from './signin';
import Counter from './counter';
import useSigninStatus from './status';

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
      <header className="App-header">
        <Signin {...status} />
        <Counter
          isSignin={status.isSignin}
          value={value}
          Increment={Incvalue}
          Decrement={Decvalue}
        />
      </header>
    </div>
  );
}

export default App;
