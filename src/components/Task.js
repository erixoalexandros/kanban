import React from 'react';

class Task  extends React.Component {



  render() {

    return (
      <div className='task'>
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <i className="fas fa-minus-circle"></i>
        <i className="fas fa-chevron-circle-right"></i>
      </div>
    );
  }
}

export default Task;