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
      todosList: todos,
      formField: "",
    };
  }

  clickHandler = event => {
    event.preventDefault();
    this.addTodo(this.state.formField);
    this.setState({
      formField: "",
    });
  }

  changeHandler = event => {
    this.setState({
      formField: event.target.value,
    });
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

  toggleCompleted = (todoTaskId) => {
    let newTodosList = this.state.todosList.map(todo => {
      if (todo.id === todoTaskId) {
        todo.completed = todo.completed ? false : true;
      }

      return todo;
    })

    this.setState({ todosList: newTodosList });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList={this.state.todosList} toggleCompleted={this.toggleCompleted} />
        <TodoForm formField={this.state.formField} changeHandler={this.changeHandler} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
