import { useRef } from "react";
import Counter, { CounterRef } from "./counter";
import { Button } from "@/components/ui/button";

const UserImperativeHandle = () => {
  const CounterRef = useRef<CounterRef>(null);
  return (
    <>
      <Counter ref={CounterRef} />
      <Button onClick={() => CounterRef.current?.reset()}>Reset</Button>
    </>
  );
};

export default UserImperativeHandle;
