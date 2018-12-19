import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './style.css';

class App extends React.Component {

  state = {
    toDo: [],
    doing: [],
    done: []};

  render() {

    return (
      <div className='app'>
        <AddTask />
        <TaskList title='TO DO'/>
        <TaskList title='DOING'/>
        <TaskList title='DONE'/>
      </div>
    );
  }
}

export default App;