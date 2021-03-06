import React from "react";

const Task = ({ task, index, onTaskRemove, onTaskPromote }) => {
  if (task.status === "done") {
    return (
      <div className="task">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <i
          className="fas fa-minus-circle"
          onClick={() => onTaskRemove(task, index)}
        />
      </div>
    );
  }

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <i
        className="fas fa-minus-circle"
        onClick={() => onTaskRemove(task, index)}
      />
      <i
        className="fas fa-chevron-circle-right"
        onClick={() => onTaskPromote(task, index)}
      />
    </div>
  );
};

export default Task;