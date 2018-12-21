import React from 'react';

const Task = ({task}) => {

    return (
      <div className='task'>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <i className="fas fa-minus-circle"></i>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    );

}

export default Task;