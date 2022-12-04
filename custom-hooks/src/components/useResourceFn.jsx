import React, { useState, useEffect } from "react";

export const useResourceFn = resFunc => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await resFunc();
      setData(resp.data.data);
    })();
  }, []);

  return data;
};
