import React from "react";

export const printProps = Component => {
  //we return new component
  //taking in the components props (basicly component that it displays)
  return props => {
    console.log(props);
    return <Component {...props} />;
  };
};
