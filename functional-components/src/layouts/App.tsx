import { ReactNode, useState } from "react";
import SplitScreen from "./components/split-screen";
import Modal from "./components/modal";
import UserLoader from "./components/container-components/user-loader";
import UserInfo from "./components/container-components/user-info";
import UncontrolledFlow from "./components/uncontrolled-controlled-components/uncontrolled-flow";
import ControlledFlow from "./components/uncontrolled-controlled-components/controlled-flow";
import AuthenticatedDashboard, {
  Dashboard,
  withAuth,
} from "./components/hoc/Auth";
import useMediaQuery from "../hooks/useMediaQuery";
import RecursiveComponent from "./components/recursive-component/recursive-component";
import TreeNode from "./components/recursive-component/tree-data-recursive-component";

const LeftSide = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <button onClick={() => setActive(true)}>Open Modal</button>
      <h1 style={{ backgroundColor: "red" }}>I am {title}!</h1>
      <Modal opened={active} close={() => setActive(false)}>
        {children}
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

const StepOne = ({ onNext }: { onNext?: (e: { name: string }) => void }) => {
  return (
    <div>
      <h1>Step One</h1>
      <button onClick={() => onNext({ name: "one" })}>Next</button>
    </div>
  );
};

const StepTwo = ({ onNext }: { onNext?: (e: { name: string }) => void }) => {
  return (
    <div>
      <h1>Step Two</h1>
      <button onClick={() => onNext({ name: "two" })}>Next</button>
    </div>
  );
};

const StepThree = ({ onNext }: { onNext?: (e: { name: "three" }) => void }) => {
  return (
    <div>
      <h1>Step Three</h1>
      <button onClick={() => onNext({ name: "three" })}>Next</button>
    </div>
  );
};

const App = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<{ name: string }[]>([]);
  console.log(smallScreen);

  const AuthenticatedDashboard = withAuth(Dashboard);

  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={1}>
        <LeftSide title="Left">
          <UserLoader resourceUrl="https://fakestoreapi.com/users/2">
            <UserInfo />
          </UserLoader>
        </LeftSide>
        <RightSide title="Right">
          <UserLoader resourceUrl="https://fakestoreapi.com/users/4">
            <UserInfo />
          </UserLoader>
          <TreeNode node={treeData} />
        </RightSide>
      </SplitScreen>

      <RecursiveComponent data={recursiveData} />

      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>

      <ControlledFlow
        currentIndex={currentIndex}
        nextStep={setCurrentIndex}
        onDone={(d) => {
          setData(d);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledFlow>

      <ul>
        {data.map((d) => (
          <li key={d.name}>{d.name}</li>
        ))}
      </ul>
      <AuthenticatedDashboard />
    </>
  );
};

export default App;

const recursiveData = {
  name: "John Doe",
  age: 32,
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: 94105,
  },
  hobbies: ["reading", "traveling", "coding"],
  education: [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University of California, Berkeley",
      year: 2015,
    },
    {
      degree: "Master of Science",
      field: "Software Engineering",
      school: "Stanford University",
      year: 2018,
    },
  ],
};

const treeData = {
  name: "Root",
  children: [
    {
      name: "Child 1",
      children: [
        { name: "Grandchild 1", children: [] },
        { name: "Grandchild 2", children: [] },
      ],
    },
    {
      name: "Child 2",
      children: [
        { name: "Grandchild 3", children: [] },
        { name: "Grandchild 4", children: [] },
      ],
    },
  ],
};
