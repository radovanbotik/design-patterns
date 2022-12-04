import React from "react";
import { useResourceFn } from "./useResourceFn";
import axios from "axios";

export const ResourceFn = ({ userId }) => {
  const dataResourceFunc = async () => {
    const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
    return resp;
  };

  const { first_name, last_name, email } =
    useResourceFn(dataResourceFunc) || {};

  return (
    <>
      <h3>{first_name}</h3>
      <h3>{last_name}</h3>
      <h3>{email}</h3>
    </>
  );
};
