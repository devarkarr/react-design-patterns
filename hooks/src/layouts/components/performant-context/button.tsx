import styled from "styled-components";
import withNavClose from "./hoc";
import { useNav } from "./nav-controller";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { collapsed, toggle } = useNav();
  return <ToggleButton onClick={toggle}>{collapsed ? "➤" : "⮜"}</ToggleButton>;
};

export const CloseButton = withNavClose(
  ({ closeNav }: { closeNav: () => void }) => {
    console.log("Close Nav - rendered");
    return <ToggleButton onClick={closeNav}>Close Nav</ToggleButton>;
  }
);

export default Button;
