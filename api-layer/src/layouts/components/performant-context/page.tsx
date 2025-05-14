import styled from "styled-components";
import { useEffect, useState } from "react";
import NavController from "./nav-controller";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Page = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <NavController>
      <Container>{children}</Container>
    </NavController>
  );
};

export default Page;
