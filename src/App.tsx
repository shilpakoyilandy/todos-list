import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "./features/todosSlice";
import { useGetTodosQuery } from "./features/apiSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { data: todos, isSuccess } = useGetTodosQuery(undefined);

  useEffect(() => {
    if (isSuccess && todos) {
      dispatch(setTodos(todos));
    }
  }, [dispatch, isSuccess, todos]);

  return (
    <div className="container">
      <TodoForm />
      <Filter />
      <TodoList />
    </div>
  );
};

export default App;
