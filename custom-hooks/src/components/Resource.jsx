import React from "react";
import { useResource } from "./useResource";

export const Resource = ({ resource }) => {
  const { name, year, color } = useResource(resource) || {};
  return (
    <>
      <h3>{name}</h3>
      <h3>{year}</h3>
      <h3>{color}</h3>
    </>
  );
};
