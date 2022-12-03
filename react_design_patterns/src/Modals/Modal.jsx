import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={e => e.stopPropagation()}>
            {children}
            <button onClick={() => setShouldShow(false)}>Close Modal</button>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0000007b;
  display: grid;
  place-content: center;
`;
const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;
