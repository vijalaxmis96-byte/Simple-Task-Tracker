import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React fundamentals", completed: true },
    { id: 2, text: "Build a task tracker app", completed: false },
    { id: 3, text: "Set up deployment pipeline", completed: true },
    { id: 4, text: "Add responsive CSS styling", completed: false },
    { id: 5, text: "Deploy to production", completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="container">
      <div className="card">
        <h1>Task Tracker</h1>
        <div className="stats">
          <p>{total} Total Tasks</p>
          <p>{completed} Completed</p>
          <p>{remaining} Remaining</p>
        </div>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
