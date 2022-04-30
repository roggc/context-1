import { useEffect } from "react";
import { useTodosContext } from "../context/hooks";

const Todos = () => {
  const { getTodos } = useTodosContext();
  const todos = getTodos();
  useEffect(() => {
    console.log("Todos rendered");
  });
  return (
    <div>
      {todos[0].text}
    </div>
  );
};

export default Todos;
