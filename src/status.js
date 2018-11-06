import { useState } from 'react';

function useSigninStatus(status) {
  const [isSignin, setSignin] = useState(status);

  const Signin = () => {
    setSignin(true);
  };

  const Signout = () => {
    setSignin(false);
  };
  return {
    isSignin,
    Signin,
    Signout
  };
}

export default useSigninStatus;
