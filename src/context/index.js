import {
  createContext,
  useContext as useContext_,
  useMemo,
  useReducer,
} from "react";

const initialState = { count: 0, todos: [{ text: "todo 1" }] };

const context = createContext(initialState);
export const useContext = () => useContext_(context);

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case EQUAL:
      return { ...state, count: state.count };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  const memoizedCtx = useMemo(
    () => ({ state, increment, decrement, equal }),
    [state]
  );
  return <context.Provider value={memoizedCtx}>{children}</context.Provider>;
};

export default ContextProvider;
