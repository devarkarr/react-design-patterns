import Button from "./button";
import Count from "./count";
import mitt from "mitt";

export const emitt = mitt();
const ObserverPattern = () => {
  return (
    <>
      <Count />
      <Button />
    </>
  );
};

export default ObserverPattern;
