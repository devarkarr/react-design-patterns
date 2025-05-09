import { useEffect, useState } from "react";
import { emitt } from "./observer-pattern";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncreamentCount = () => {
      setCount((prev) => prev + 1);
    };

    const onDecreamentCount = () => {
      setCount((prev) => prev - 1);
    };

    emitt.on("increament", onIncreamentCount);
    emitt.on("decreament", onDecreamentCount);

    return () => {
      emitt.off("increament", onIncreamentCount);
      emitt.off("decreament", onDecreamentCount);
    };
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Count;
