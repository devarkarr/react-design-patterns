import { emitt } from "./observer-pattern";

const Button = () => {
  const increamentCount = () => {
    emitt.emit("increament");
  };
  const decreamentCount = () => {
    emitt.emit("decreament");
  };
  return (
    <div>
      <button onClick={increamentCount}>+</button>
      <button onClick={decreamentCount}>-</button>
    </div>
  );
};

export default Button;
