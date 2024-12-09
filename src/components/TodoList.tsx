import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleTodo, deleteTodo } from "../features/todosSlice";
import styles from "../styles/todolist.module.css";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "complete") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className={styles.todoListContainer}>
      <ul className={styles.todolist}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className={styles.checkbox}
            />
            <span className={styles.todoText}>{todo.title}</span>
            <button
              className={styles.deleteButton}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
