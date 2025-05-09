import React, { useState } from "react";

interface Data {
  name: string;
}
type Props = {
  children: React.ReactNode;
  onDone: (d: Data[]) => void;
};

const UncontrolledFlow = ({ children, onDone }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Data[]>([]);

  const childrenArray = React.Children.toArray(children);

  const onNext = (addNewData: { name: string }) => {
    const newData = [...data, addNewData];
    if (currentIndex < childrenArray.length - 1) {
      setData(newData);
      setCurrentIndex((prev) => prev + 1);
    } else {
      onDone(newData);
    }
  };

  const currentEle = childrenArray[currentIndex];
  // @ts-ignore
  return React.cloneElement(currentEle, { onNext });
};

export default UncontrolledFlow;
