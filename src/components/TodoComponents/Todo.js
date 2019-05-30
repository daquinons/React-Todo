import React from 'react';

const Todo = ( { todo, toggleCompleted} ) => {
  const manageClick = () => {
    toggleCompleted(todo.id);
  }
  
  return(
    <div onClick={manageClick}>
      <p>{todo.task}</p>
    </div>
  )
}

export default Todo;