import React from "react";

export const NumberedList = ({
  items,
  resource,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            <h3>{index + 1}</h3>
            <ItemComponent key={index} {...{ [resource]: item }} />
          </>
        );
      })}
    </>
  );
};
