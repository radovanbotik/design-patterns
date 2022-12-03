import React from "react";

export const RegularList = ({
  items,
  resource,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resource]: item }} />
      ))}
    </>
  );
};

//if we pass person as resourceName
// {...{[resourceName]:item}} will change into person={item}
