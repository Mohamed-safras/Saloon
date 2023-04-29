import { useState } from "react";

const useInputHandler = (InitialState) => {
  const [formInput, setFormInput] = useState(InitialState);

  const handleInput = (event) => {
    console.log(event.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };
  return {
    formInput,
    handleInput,
  };
};

export default useInputHandler;
