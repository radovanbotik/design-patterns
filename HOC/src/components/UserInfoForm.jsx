import React from "react";
import { withEditabledUser } from "./withEditabledUser";

// export const UserInfoForm = props => {
//   const { modifiedUser, modifyUser, saveUser, resetUser } = props;
//   return <div>UserInfoForm</div>;
// };

export const UserInfoForm = withEditabledUser(
  ({ modifiedUser, modifyUser, saveUser, resetUser }) => {
    const { first_name, last_name, email } = modifiedUser || {
      first_name: "",
      last_name: "",
      email: "",
    };
    return modifiedUser ? (
      <form>
        <p>first name</p>
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={e => modifyUser({ first_name: e.target.value })}
          // onChange={e => modifyUser({ [e.target.name]: e.target.value })}
        />
        <p>last name</p>
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={e => modifyUser({ last_name: e.target.value })}
          // onChange={e => modifyUser({ [e.target.name]: e.target.value })}
        />
        <p>email</p>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => modifyUser({ email: e.target.value })}
          // onChange={e => modifyUser({ [e.target.name]: e.target.value })} />
        />
        <button type="button" onClick={saveUser}>
          save changes
        </button>
        <button type="button" onClick={resetUser}>
          discard changes
        </button>
      </form>
    ) : (
      <p>loading....</p>
    );
  },
  4
);
