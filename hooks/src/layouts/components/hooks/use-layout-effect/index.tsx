import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffect() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const boxRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("bg-blue-500");

  useLayoutEffect(() => {
    if (boxRef.current) {
      const updateSize = () => {
        const { width, height } = boxRef.current!.getBoundingClientRect();
        setSize({ width: Math.round(width), height: Math.round(height) });

        // Width အလိုက် color ပြောင်းမယ်
        if (width > 300) {
          setColor("bg-red-500");
        } else if (width > 200) {
          setColor("bg-yellow-500");
        } else {
          setColor("bg-blue-500");
        }
      };

      updateSize();

      // Resize observer ထည့်ထားတယ်
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(boxRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📏 Element Size Monitor
      </h2>

      <div
        ref={boxRef}
        className={`${color} w-full h-40 rounded-lg transition-all duration-300 flex items-center justify-center`}
      >
        <p className="text-white font-bold text-lg">
          {size.width}px × {size.height}px
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <button
          onClick={() => {
            if (boxRef.current) {
              boxRef.current.style.width = "150px";
            }
          }}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Small
        </button>
        <button
          onClick={() => {
            if (boxRef.current) {
              boxRef.current.style.width = "250px";
            }
          }}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Medium
        </button>
        <button
          onClick={() => {
            if (boxRef.current) {
              boxRef.current.style.width = "350px";
            }
          }}
          className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Large
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-medium mb-2">useLayoutEffect အကြောင်း:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>DOM update ပြီးတာနဲ့ ချက်ချင်းအလုပ်လုပ်တယ်</li>
          <li>Browser paint မလုပ်ခင် run တယ်</li>
          <li>DOM measurements လုပ်ဖို့အကောင်းဆုံး</li>
          <li>Visual updates မတိုင်ခင် synchronous လုပ်ချင်တဲ့အခါသုံးတယ်</li>
        </ul>
      </div>
    </div>
  );
}

export default UseLayoutEffect;