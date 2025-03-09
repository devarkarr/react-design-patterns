import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  opened: boolean;
  close: () => void;
  children: ReactNode;
};

const ModalBackground = styled.div<{ opened: boolean }>`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  overflow: auto;
  background-color: gray;
  display: ${(p) => (p.opened ? "block" : "none")};
`;

const ModalContent = styled.div`
  width: auto;
  height: auto;
  background-color: red;
`;

const Modal = ({ opened, close, children }: Props) => {
  return (
    <ModalBackground opened={opened} onClick={close}>
      <ModalContent>{children}</ModalContent>
    </ModalBackground>
  );
};

export default Modal;
