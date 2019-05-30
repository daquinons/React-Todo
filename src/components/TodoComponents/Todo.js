import React from 'react';
import './Todo.css';

const Todo = ( { todo, toggleCompleted} ) => {
  const manageClick = () => {
    toggleCompleted(todo.id);
  }

  return(
    <div onClick={manageClick}>
      <p>
        <span className={todo.completed ? "completed" : null}>{todo.task}</span>
      </p>
    </div>
  )
}

export default Todo;