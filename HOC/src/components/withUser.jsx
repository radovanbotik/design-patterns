import React, { useState, useEffect } from "react";
import axios from "axios";

//takes in:
//1.another component
//2.id of user we want component to load

export const withUser = (AnotherComponent, userId) => {
  return props => {
    // console.log(props);
    const [user, setUser] = useState(null);
    useEffect(() => {
      (async () => {
        // const resp = await axios.get("https://reqres.in/api/users?page=1");
        // setUser(resp.data.filter(user => user.id === userId));
        const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(resp.data.data);
      })();
    }, [userId]);
    //...props s the original props from the component that we are passing in
    return <AnotherComponent {...props} user={user} />;
  };
};
