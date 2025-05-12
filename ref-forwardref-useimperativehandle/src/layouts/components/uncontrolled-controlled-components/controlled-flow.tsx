import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  currentIndex: number;
  nextStep: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
  onDone: (data: { name: string }[]) => void;
};

const ControlledFlow = ({
  currentIndex,
  nextStep,
  children,
  onDone,
}: Props) => {
  const [value, setValue] = useState<{ name: string }[]>([]);
  const childrenArray = React.Children.toArray(children);

  const onNext = (addNewData: { name: string }) => {
    const newData = [...value, addNewData];
    if (currentIndex < childrenArray.length - 1) {
      setValue(newData);
      nextStep((prev) => prev + 1);
    } else {
      onDone(newData);
    }
  };

  const currentEle = childrenArray[currentIndex];
  // @ts-ignore
  return React.cloneElement(currentEle, { onNext });
};

export default ControlledFlow;
