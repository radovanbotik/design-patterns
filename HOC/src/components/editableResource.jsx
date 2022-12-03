import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const editabledResource = (Component, resourcePath, resourceName) => {
  return props => {
    const [originalData, setOriginalData] = useState(null);
    const [modifiedData, setModifiedData] = useState(null);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(`${resourcePath}`);
        setOriginalData(resp.data.data);
        setModifiedData(resp.data.data);
      })();
    }, []);

    const modifyData = changes => {
      setModifiedData({ ...modifiedData, ...changes });
    };

    const saveData = async () => {
      const resp = await axios.post(`${resourcePath}`, {
        [resourceName]: modifiedData,
      });
      setOriginalData(resp.data.modifiedData);
      setModifiedData(resp.data.modifiedData);
    };

    const resetData = () => {
      setModifiedData(originalData);
    };

    const resourceProps = {
      [resourceName]: modifiedData,
      [`modify${capitalize(resourceName)}`]: modifyData,
      [`save${capitalize(resourceName)}`]: saveData,
      [`reset${capitalize(resourceName)}`]: resetData,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
