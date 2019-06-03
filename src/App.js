import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    const savedTasksJson = window.localStorage.getItem('savedTasks');
    this.state = { 
      todosList: savedTasksJson ? JSON.parse(savedTasksJson) : [],
      formField: "",
    };
  }

  clickHandler = event => {
    event.preventDefault();
    if (event.target.id === 'addTaskButton'){
      this.addTodo(this.state.formField);
      this.setState({
        formField: "",
      });
    } else if (event.target.id === 'clearCompletedButton') {
      this.clearCompleted();
    };
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

  clearCompleted = () => {
    const newTodosList = this.state.todosList.filter(todo => todo.completed === false);
    this.setState({ todosList: newTodosList });
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

  componentDidUpdate(_, prevState) {
    if (JSON.stringify(this.state.todosList) !== prevState) {
      window.localStorage.setItem('savedTasks', JSON.stringify(this.state.todosList));
    }
  }

  render() {
    return (
      <div className="container-app">
        <h1>Todo List</h1>
        <TodoList todoList={this.state.todosList} toggleCompleted={this.toggleCompleted} />
        <TodoForm formField={this.state.formField} changeHandler={this.changeHandler} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
