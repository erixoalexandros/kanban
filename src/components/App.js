import React from 'react';
import TaskList from './TaskList';
import './style.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <TaskList title='To Do'/>
        <TaskList title='Doing'/>
        <TaskList title='Done'/>
      </div>
    );
  }
}

export default App;