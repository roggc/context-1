import { useEffect } from "react";
import { useCounterContext } from "../context/hooks";

const Counter = () => {
  const { getCount, increment, decrement, equal } = useCounterContext();
  const count = getCount();
  useEffect(() => {
    console.log("Counter rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
      {count}
    </div>
  );
};

export default Counter;
