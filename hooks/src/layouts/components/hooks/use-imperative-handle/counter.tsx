import { Button } from "@/components/ui/button";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";

interface CounterProps {}

export interface CounterRef {
  reset: () => void;
}
const Counter = forwardRef(({}: CounterProps, ref: Ref<CounterRef>) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  const reset = () => setCount(0);

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div>
      <h1>Count : {count}</h1>
      <div className="flex space-x-5 items-center">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
});

export default Counter;
