import { useCallback, useMemo } from "react";
import { useContext } from ".";

export const useCounterContext = () => {
  const {
    state: { count },
    increment: increment_,
    decrement: decrement_,
    equal: equal_,
  } = useContext();
  const getCount = useCallback(() => count, [count]);
  const increment = useCallback(() => increment_(), [increment_]);
  const decrement = useCallback(() => decrement_(), [decrement_]);
  const equal = useCallback(() => equal_(), [equal_]);
  return useMemo(
    () => ({ getCount, increment, decrement, equal }),
    [getCount, increment, decrement, equal]
  );
};

export const useTodosContext = () => {
  const {
    state: { todos },
  } = useContext();
  const getTodos = useCallback(() => todos, [todos]);
  return useMemo(() => ({ getTodos }), [getTodos]);
};
