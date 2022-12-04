import React from "react";
import { useUser } from "./useUser";

export const User = () => {
  const { first_name, last_name, email } = useUser(3) || {};
  return (
    <>
      <h3>{first_name}</h3>
      <h3>{last_name}</h3>
      <h3>{email}</h3>
    </>
  );
};
