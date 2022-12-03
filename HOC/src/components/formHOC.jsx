import React, { useState, useEffect } from "react";
import axios from "axios";

const formHOC = (Component, userId) => {
  return props => {
    const [originalData, setOriginalData] = useState(null);
    const [inputData, setInputData] = useState(null);

    useEffect(() => {
      (async () => {
        const resp = await axios.get(`https://reqres.in/api/users/${userId}`);
        setOriginalData(resp.data.data);
        setInputData(resp.data.data);
      })();
    }, []);

    //function to handle change
    const handleChange = changes => {
      setInputData(prev => ({ ...prev, ...changes }));
    };
    //function to handle save
    const saveChanges = async () => {
      const resp = await axios.post(`https://reqres.in/api/users${userId}`, {
        inputData,
      });
      setOriginalData(inputData);
    };

    //function to reset changes
    const resetChanges = () => {
      setInputData(originalData);
    };

    return (
      <Component
        {...props}
        inputData={inputData}
        setInputData={setInputData}
        saveChanges={saveChanges}
        resetChanges={resetChanges}
        handleChange={handleChange}
      />
    );
  };
};

export default formHOC;
