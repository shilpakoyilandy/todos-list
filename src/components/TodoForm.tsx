import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todosSlice";
import { RootState } from "../store";
import styles from "../styles/todoform.module.css";
const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title: title.trim(),
        completed: false,
      };

      dispatch(addTodo(newTodo));
      setTitle("");
    }
  };

  return (
    <div className={styles.todoform}>
      <h1 className={styles.title}>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.addinput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
