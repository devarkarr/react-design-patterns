interface RecursiveComponentProps {
  data: RecursiveData;
}

interface RecursiveData {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
  };
  hobbies: string[];
  education: [
    {
      degree: string;
      field: string;
      school: string;
      year: number;
    },
    {
      degree: string;
      field: string;
      school: string;
      year: number;
    }
  ];
}
const RecursiveComponent = ({ data }: RecursiveComponentProps) => {
  const isObject = (x: RecursiveData) => typeof x === "object" && x !== null;

  if (!isObject(data)) {
    // @ts-ignore
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

export default RecursiveComponent;
