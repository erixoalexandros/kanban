import React from 'react';
import Task from './Task';

const TaskList = ({title}) => {

  return (
    <div className='task-list'>
      <h1>{title}</h1>
      <div className='task-list-container'>
      </div>  
    </div>
  );
}

export default TaskList;