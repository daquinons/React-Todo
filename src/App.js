import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = { 
      todosList: todos 
    };
  }

  addTodo = (todoTask) => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false,
    }

    const updatedTodosList = this.state.todosList.concat(newTodo);
    this.setState({ todosList: updatedTodosList });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.todosList} />
        <TodoForm addFunction={this.addTodo} />
      </div>
    );
  }
}

export default App;
