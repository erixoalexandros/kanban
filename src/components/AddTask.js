import React from 'react';

class AddTask extends React.Component {

  state = {title: '', description: ''};

  initializeState = () => this.setState({title: '', description: ''});

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onTaskAdd(this.state);
    this.initializeState();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

    return (
      <form
          className='add-task'
          onSubmit={this.handleSubmit}>
        <h2>ADD TASK</h2>
        <br/>
        <label htmlFor='title'>Title:</label>
        <br/>
        <input
          type='text'
          name='title'
          required
          value={this.state.title}
          onChange={this.handleChange}/>
        <br/>
        <label htmlFor='description'>Description:</label>
        <br/>
        <textarea
          name='description'
          required
          value={this.state.description}
          onChange={this.handleChange}>
        </textarea>
        <br/>
        <button type='submit'>+</button>
      </form>
    );
  }
}

export default AddTask;