import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const ConModal = ({ modalState, onRequestClose, children }) => {
  return (
    <>
      {modalState && (
        <ModalBackground onClick={onRequestClose}>
          <ModalBody onClick={e => e.stopPropagation()}>
            {children}
            <button onClick={onRequestClose}>click to close</button>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  background-color: #00000081;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  place-content: center;
`;
const ModalBody = styled.div`
  padding: 2rem;
  background-color: white;
`;
