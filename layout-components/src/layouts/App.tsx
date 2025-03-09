import SplitScreen from "./components/split-screen";

const LeftSide = ({ title }: { title: string }) => {
  return <h1 style={{ backgroundColor: "red" }}>I am {title}!</h1>;
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
