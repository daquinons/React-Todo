import React from 'react';
import './Todo.css';

const Todo = ( { todo, toggleCompleted} ) => {
  const manageClick = () => {
    toggleCompleted(todo.id);
  }

  return(
    <div onClick={manageClick}>
      <p className={todo.completed ? "completed" : null}>{todo.task}</p>
    </div>
  )
}

export default Todo;