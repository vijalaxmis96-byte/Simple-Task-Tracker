import { useState } from "react";
import "./App.css";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span className="task-text">{task.text}</span>
      <div className="task-buttons">
        <button
          onClick={() => onToggle(task.id)}
          className={task.completed ? "undo-btn" : "complete-btn"}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const remainingCount = totalCount - completedCount;

  return (
    <div className="app">
      <div className="header">
        <h1>Task Tracker</h1>
        <div className="stats">
          <div><strong>{totalCount}</strong><br />Total Tasks</div>
          <div><strong>{completedCount}</strong><br />Completed</div>
          <div><strong>{remainingCount}</strong><br />Remaining</div>
        </div>
      </div>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit" className="add-btn">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}
