import React from "react";
import styled from "styled-components";

export const SplitScreen = props => {
  const [left, right] = props.children;
  const {
    // left: Left,
    // right: Right,
    leftWidth = 1,
    rightWidth = 1,
    leftColor = "grey",
    rightColor = "grey",
  } = props;
  return (
    <Container>
      <Pane width={leftWidth} bg={leftColor}>
        {left}
      </Pane>
      <Pane width={rightWidth} bg={rightColor}>
        {right}
      </Pane>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props => props.width};
  background-color: ${props => props.bg};
`;
