import React from "react";
import { useState, useEffect } from "react";

export const DataSource = ({
  getDataFn = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFn();
      setState(data.data);
    })();
  }, [getDataFn]);
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
