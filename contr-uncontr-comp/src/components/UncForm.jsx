import React from "react";

export const UncForm = () => {
  const firstNameInput = React.createRef();
  const lastNameInput = React.createRef();
  const ageInput = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      firstNameInput.current.value,
      lastNameInput.current.value,
      ageInput.current.value
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="first name"
        ref={firstNameInput}
      />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        ref={lastNameInput}
      />
      <input type="age" name="age" placeholder="age" ref={ageInput} />
      <button type="submit">submit</button>
    </form>
  );
};
