import React, { useState } from "react";

const  useForm = (initialState = {}) => {
  const [stateForm, setstateForm] = useState(initialState);
  const reset = () => {
    setstateForm(initialState);
  };

  const handleInputChange = ({ target }) => {
    setstateForm({
      ...stateForm,
      [target.name]: target.value,
    });
  };

  return [stateForm,handleInputChange,reset];
};

export default useForm;