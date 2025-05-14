import React from "react";

interface MemoComponentProps {
  data: {
    name: string;
  }[];
  handle: () => void;
}

const MemoComponent = React.memo(({ data, handle }: MemoComponentProps) => {
  console.log("ui render");
  return (
    <ul>
      {data.map((d, i) => (
        <li key={i} onClick={handle}>
          {d.name}
        </li>
      ))}
    </ul>
  );
});

interface Data {
  name: string;
}

const Memoize = () => {
  const [defaultValues, setDefaultValues] = React.useState<Data[]>([
    { name: "Alice" },
    { name: "Bob" },
  ]);

  const data = React.useMemo(() => {
    return defaultValues.map((d) => ({ name: d.name.toUpperCase() }));
  }, [defaultValues]);

  const handle = React.useCallback(() => {
    console.log("Item clicked");

    setDefaultValues((prev) =>
      prev.find((p) => p.name == "test") ? prev : [...prev, { name: "test" }]
    );
  }, []);

  return <MemoComponent data={data} handle={handle} />;
};

export default Memoize;
