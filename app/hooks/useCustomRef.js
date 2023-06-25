import {useRef} from 'react';

const useCustomRef = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const mobileRef = useRef();

  return {
    emailRef,
    passwordRef,
    confirmPasswordRef,
    nameRef,
    mobileRef,
  };
};

export default useCustomRef;
