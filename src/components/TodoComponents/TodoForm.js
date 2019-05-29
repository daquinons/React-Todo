import React, { useState } from 'react';

const TodoForm = ({ addFunction }) => {

  const [todo, setTodo] = useState('');
  
  const clickHandler = () => {
    console.log(addFunction);
    addFunction(todo);
  }

  const changeHandler = event => {
    setTodo(event.target.value);
  }

  return (
    <div>
      <input onChange={changeHandler} />
      <button onClick={clickHandler}>Add Task</button>
      <button>Clear Completed</button>
    </div>
  )
}

export default TodoForm;