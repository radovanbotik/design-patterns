import React, { useState, useEffect } from "react";
import axios from "axios";

export const useResource = resourceName => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await axios.get(`https://reqres.in/api/${resourceName}`);
      setData(resp.data.data);
    })();
  }, [resourceName]);

  return data;
};
