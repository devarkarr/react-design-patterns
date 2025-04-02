import { useState } from "react";
import { createPortal } from "react-dom";

interface AlertProps {
  opened: boolean;
  onClose: () => void;
}

export default function ReactPortal() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div>
        <button onClick={() => setShow(true)}>Show Alert</button>
      </div>
      <Alert opened={show} onClose={() => setShow((prev) => !prev)} />
    </div>
  );
}

const Alert = ({ opened, onClose }: AlertProps) => {
  if (!opened) return;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        backgroundColor: "black",
        padding: "30px",
        position: "fixed",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "red",
          padding: "30px",
          width: "30%",
          height: "30%",
        }}
      >
        <h1>Hello World</h1>
      </div>
    </div>,
    document.body
  );
};
