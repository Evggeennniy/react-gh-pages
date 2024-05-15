import "./List.css";
import React, { useState } from "react";

export const RowList = function ({ ...props }) {
  return <ul className="nav_list-row-end" {...props}></ul>;
};

export const ColumnList = function ({ ...props }) {
  return <ul className="nav_list-col" {...props}></ul>;
};

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Завершить проект", isCompleted: false },
    { id: 2, text: "Прочитать книгу", isCompleted: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (newTask !== "") {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      setTasks([...tasks, { id: newId, text: newTask, isCompleted: false }]);
      setNewTask("");
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const sortedTasks = [...tasks].sort((a, b) => b.isCompleted - a.isCompleted);

  return (
    <div>
      <ul>
        {sortedTasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
            onClick={() => handleToggle(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Добавьте новую задачу"
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
    </div>
  );
};
