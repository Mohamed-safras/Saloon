import { useState } from "react";

const useInputHandler = (InitialState) => {
  const [formInput, setFormInput] = useState(InitialState);

  const handleInput = (event) => {
    setFormInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });

    console.log(formInput);
  };

  return {
    formInput,
    handleInput,
  };
};

export default useInputHandler;
