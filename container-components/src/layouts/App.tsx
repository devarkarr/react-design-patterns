import { ReactNode, useState } from "react";
import SplitScreen from "./components/split-screen";
import Modal from "./components/modal";
import UserLoader from "./components/container-components/user-loader";
import UserInfo from "./components/container-components/user-info";

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

const RightSide = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <h1 style={{ backgroundColor: "blue" }}>I am {title}!</h1>
      {children}
    </>
  );
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={1}>
      <LeftSide title="Left" />
      <RightSide title="Right">
        <UserLoader resourceUrl="https://fakestoreapi.com/users/4">
          <UserInfo />
        </UserLoader>
      </RightSide>
    </SplitScreen>
  );
};

export default App;
