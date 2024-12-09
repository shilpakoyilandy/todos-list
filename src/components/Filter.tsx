import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todosSlice";
import { RootState } from "../store";
import styles from "../styles/filter.module.css";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todos.filter);

  const handleFilterChange = (filter: "all" | "complete" | "incomplete") => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={styles.filtercontainer}>
      <button
        onClick={() => handleFilterChange("all")}
        style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange("complete")}
        style={{ fontWeight: filter === "complete" ? "bold" : "normal" }}
      >
        Complete
      </button>
      <button
        onClick={() => handleFilterChange("incomplete")}
        style={{ fontWeight: filter === "incomplete" ? "bold" : "normal" }}
      >
        Incomplete
      </button>
    </div>
  );
};

export default Filter;
