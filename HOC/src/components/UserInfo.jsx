import React from "react";

export const UserInfo = props => {
  const { first_name, email, last_name } = props.user || {};
  return props.user ? (
    <>
      <h3>{first_name}</h3>
      <p>Email: {email}</p>
      <p>{last_name}</p>
      <h3>hi</h3>
    </>
  ) : (
    <p>loading</p>
  );
};
