import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ConForm = () => {
  const [inputError, setInputError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (firstName.length < 2) {
      setInputError("name too short");
    } else {
      setInputError("");
    }
  }, [firstName, lastName, age]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, age);
  };
  return (
    <form onSubmit={handleSubmit}>
      {inputError && <p>{inputError}</p>}
      <input
        type="text"
        name="first_name"
        placeholder="first name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
      />
      <button type="submit">submit</button>
    </form>
  );
};
