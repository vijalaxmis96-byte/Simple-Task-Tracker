import React from "react";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span>{task.text}</span>
          <div>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
