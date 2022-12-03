import React from "react";
import { editabledResource } from "./editableResource";

const ResourceForm = editabledResource(
  props => {
    const { user, setuser, saveUser, resetUser, handleChange } = props;
    console.log(props);
    const { first_name, last_name, email } = user || {};
    return user ? (
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
        <button type="button" onClick={saveUser}>
          save
        </button>
        <button type="button" onClick={resetUser}>
          discard User
        </button>
      </form>
    ) : (
      <p>...loading</p>
    );
  },
  "https://reqres.in/api/users/2",
  "user"
);

export default ResourceForm;
