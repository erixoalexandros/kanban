import React from 'react';
import Task from './Task';

const TaskList = ({title}) => {


  return (
    <div className='task-list'>
      <h1>{title}</h1>
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default TaskList;