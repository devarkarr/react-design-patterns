import { useState } from "react";
import SplitScreen from "./components/split-screen";
import Modal from "./components/modal";

const LeftSide = ({ title }: { title: string }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <button onClick={() => setActive(true)}>Open Modal</button>
      <h1 style={{ backgroundColor: "red" }}>I am {title}!</h1>
      <Modal opened={active} close={() => setActive(false)}>
        <div>
          <h1>Hello Modal</h1>
        </div>
      </Modal>
    </div>
  );
};

const RightSide = ({ title }: { title: string }) => {
  return <h1 style={{ backgroundColor: "blue" }}>I am {title}!</h1>;
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={1}>
      <LeftSide title="Left" />
      <RightSide title="Right" />
    </SplitScreen>
  );
};

export default App;
