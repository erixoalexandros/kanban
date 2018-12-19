import React from 'react';

class AddTask extends React.Component {

  state = {title: '', description: ''};

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  }

  render() {

    return (
      <form className='add-task' onSubmit={this.onFormSubmit}>
        <h2>ADD TASK</h2>
        <br/>
        <label htmlFor='title'>Title:</label>
        <br/>
        <input type='text' name='title' required/>
        <br/>
        <label htmlFor='description'>Description:</label>
        <br/>
        <textarea name='description' required></textarea>
        <br/>
        <button type='submit'>+</button>
      </form>
    );
  }
}

export default AddTask;