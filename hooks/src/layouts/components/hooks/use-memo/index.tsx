import { useMemo, useState } from "react";
import { exspensiveItems } from "../utils";

const UserMemo = () => {
  const [count, setCount] = useState(0);
  const [items, _] = useState(exspensiveItems);

  const selectedItem = useMemo(() => {
    return items.find((item) => item.id === count);
  }, [items, count]);

  return (
    <div className="w-dvw h-dvh flex items-center justify-center flex-col gap-4">
      <h1 className="text-xl font-bold text-teal-500">Count: {count}</h1>
      <h1 className="text-xl font-bold text-teal-500">
        Selected Item: {selectedItem?.id}
      </h1>
      <button
        className="p-3 py-1.5 bg-teal-500 text-white rounded-xl cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default UserMemo;



