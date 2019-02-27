import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title: 'default TODO', id: 0},
      ],
      uniqueId: 1,
    };
  }

  addTodo = (title) => {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

  removeTodo = () => {
    this.setState({
      tasks: [],
    });
  }

  render(){
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
        <button onClick={this.removeTodo}>reset TODOs</button>
      </div>
    );
  }
}

export default App;
