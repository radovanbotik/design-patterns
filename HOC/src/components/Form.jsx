import React from "react";
import formHOC from "./formHOC";

const Form = formHOC(props => {
  const { inputData, setInputData, saveChanges, resetChanges, handleChange } =
    props;
  const { first_name, last_name, email } = inputData || {};
  return inputData ? (
    <form>
      <label>
        first name
        <input
          type="text"
          value={first_name}
          name="first_name"
          onChange={e => handleChange({ [e.target.name]: e.target.value })}
        />
      </label>
      <label>
        last name
        <input
          type="text"
          value={last_name}
          name="last_name"
          onChange={e => handleChange({ [e.target.name]: e.target.value })}
        />
      </label>
      <label>
        email
        <input
          type="email"
          value={email}
          name="email"
          onChange={e => handleChange({ [e.target.name]: e.target.value })}
        />
      </label>
      <button type="button" onClick={saveChanges}>
        save
      </button>
      <button type="button" onClick={resetChanges}>
        discard changes
      </button>
    </form>
  ) : (
    <p>...loading</p>
  );
}, 4);

export default Form;
