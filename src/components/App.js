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

  onTaskRemove = (task, taskIndex) => {
    this.setState({[task.status]: this.state[task.status].filter((item, i) => i !== taskIndex)});
  }

  onTaskPromote = (task, taskIndex) => {

    let temp = [];

    temp = [...temp, task];

    switch (task.status) {

      case 'toDo':
        
          this.setState({toDo: this.state.toDo.filter((item, i) => i !== taskIndex)});

          temp = temp.map(item => {
            item.status = 'doing'
            return item;
          });

          this.setState({doing: [...this.state.doing, ...temp]});
        
        break;

      case 'doing':

          this.setState({doing: this.state.doing.filter((item, i) => i !== taskIndex)});

          temp = temp.map(item => {
            item.status = 'done'
            return item;
          });

          this.setState({done: [...this.state.done, ...temp]});

        break;
    
      default:
        break;
    }
    
  }

  render() {

    return (
      <div className='app'>
        <AddTask onTaskAdd={this.onTaskAdd}/>
        <TaskList
          title='TO DO'
          tasks={this.state.toDo}
          onTaskRemove={this.onTaskRemove}
          onTaskPromote={this.onTaskPromote}
        />
        <TaskList
          title='DOING'
          tasks={this.state.doing}
          onTaskRemove={this.onTaskRemove}
          onTaskPromote={this.onTaskPromote}
        />
        <TaskList
          title='DONE'
          tasks={this.state.done}
          onTaskRemove={this.onTaskRemove}
        />
      </div>
    );
  }
}

export default App;