import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);
  const URL = "https://reqres.in/api";

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`${URL}/users/${userId}`);
      setUser(resp.data.data);
    })();
  }, [userId]);
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
