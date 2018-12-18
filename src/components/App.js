import React from 'react';
import TaskList from './TaskList';
import './style.css';

class App extends React.Component {



  render() {

    return (
      <div className='app'>
        <TaskList title='TO DO'/>
        <TaskList title='DOING'/>
        <TaskList title='DONE'/>
      </div>
    );
  }
}

export default App;