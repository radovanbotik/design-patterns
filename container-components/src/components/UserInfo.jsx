import React from "react";

export const UserInfo = ({ user }) => {
  // console.log(user);
  const { name, email, gender, status } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        Status: {status} Gender: {gender}
      </p>
      <h3>All data:</h3>
      <ul>
        {Object.keys(user).map((data, index) => (
          <li key={data[0]}>{data}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>loading...</p>
  );
  return;
};
