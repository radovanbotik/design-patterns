import React from "react";

export const productSmallListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
};
