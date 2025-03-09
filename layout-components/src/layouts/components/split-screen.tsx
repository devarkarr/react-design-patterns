import React, { ReactNode } from "react";
import { styled } from "styled-components";
type Props = {
  leftWidth: number;
  rightWidth: number;
  children: ReactNode;
};

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${(p) => p.flex};
`;
const SplitScreen = ({ children,leftWidth,rightWidth }: Props) => {
  const [Left, Right] = React.Children.toArray(
    children
  ) as React.ReactElement[];
  return (
    <Container>
      <Panel flex={leftWidth}>{React.cloneElement(Left)}</Panel>
      <Panel flex={rightWidth}>{React.cloneElement(Right)}</Panel>
    </Container>
  );
};

export default SplitScreen;
