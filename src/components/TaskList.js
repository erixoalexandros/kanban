import React from 'react';
import Task from './Task';

const TaskList = ({title, tasks}) => {

  if (tasks.toDo.length === 0) {
    return (
      <div className='task-list'>
        <h1>{title}</h1>
        <div className='task-list-container'>
        </div>  
      </div>
    );
  }

  const tasksToRender = tasks.toDo.map((currentTask, i) => {
    return <Task task={currentTask} key={i}/>;
  });

  return (
    <div className='task-list'>
      <h1>{title}</h1>
      <div className='task-list-container'>
        {tasksToRender}
      </div>  
    </div>
  );
}

export default TaskList;