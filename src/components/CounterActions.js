import { useEffect } from "react";
import { useCounterContext } from "../context/hooks";

const CounterActions = () => {
  const { increment, decrement, equal } = useCounterContext();
  useEffect(() => {
    console.log("CounterActions rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
    </div>
  );
};

export default CounterActions;
