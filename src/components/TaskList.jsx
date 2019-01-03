import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks, onTaskRemove, onTaskPromote }) => {
  let tasksToRender = () => {
    return tasks.map((currentTask, i) => {
      return (
        <Task
          task={currentTask}
          key={i}
          index={i}
          onTaskRemove={onTaskRemove}
          onTaskPromote={onTaskPromote}
        />
      );
    });
  };

  return (
    <div className="task-list">
      <h1>{title}</h1>
      <div className="task-list-container">{tasksToRender()}</div>
    </div>
  );
};

export default TaskList;