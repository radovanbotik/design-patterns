import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const withEditabledUser = (Component, userId) => {
  return props => {
    const [originalUser, setOriginalUser] = useState(null);
    const [modifiedUser, setModifiedUser] = useState(null);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
        setOriginalUser(resp.data.data);
        setModifiedUser(resp.data.data);
      })();
    }, [userId]);
    const modifyUser = changes => {
      setModifiedUser({ ...modifiedUser, ...changes });
    };

    const saveUser = async () => {
      const resp = await axios.post(`https://reqres.in/api/users/${userId}`, {
        modifiedUser,
      });
      setOriginalUser(resp.data.modifiedUser);
      setModifiedUser(resp.data.modifiedUser);
    };

    const resetUser = () => {
      setModifiedUser(originalUser);
    };
    return (
      <Component
        {...props}
        modifiedUser={modifiedUser}
        modifyUser={modifyUser}
        saveUser={saveUser}
        resetUser={resetUser}
      />
    );
  };
};
