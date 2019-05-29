import React, { useState } from 'react';

const TodoForm = ({ addFunction }) => {

  const [todo, setTodo] = useState('');
  
  const clickHandler = event => {
    event.preventDefault();
    addFunction(todo);
    setTodo('');
  }

  const changeHandler = event => {
    setTodo(event.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={changeHandler} value={todo} />
        <button onClick={clickHandler}>Add Task</button>
        <button>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;