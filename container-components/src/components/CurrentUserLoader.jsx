import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(
  //   React.Children.map(children, child => React.cloneElement(child, { child }))
  // );
  useEffect(() => {
    (async () => {
      const resp = await axios.get("https://gorest.co.in/public/v2/users");
      setUser(resp.data[0]);
    })();
  }, []);
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
