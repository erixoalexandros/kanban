import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import './style.css';

class App extends React.Component {

  state = {
    toDo: [],
    doing: [],
    done: []};

  onTaskAdd = (task) => {
    this.setState({toDo: [...this.state.toDo, task]});
  }

  render() {

    return (
      <div className='app'>
        <AddTask onTaskAdd={this.onTaskAdd}/>
        <TaskList title='TO DO' tasks={this.state}/>
        <TaskList title='DOING' tasks={this.state}/>
        <TaskList title='DONE' tasks={this.state}/>
      </div>
    );
  }
}

export default App;