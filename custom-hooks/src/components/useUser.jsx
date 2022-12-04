import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = userId => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUser(resp.data.data);
    })();
  }, [userId]);

  return user;
};
