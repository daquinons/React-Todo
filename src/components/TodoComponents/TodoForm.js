import React from 'react';

const TodoForm = ({ formField, clickHandler, changeHandler }) => {
  
  return (
    <div>
      <form>
        <input onChange={changeHandler} value={formField} />
        <button onClick={clickHandler}>Add Task</button>
        <button>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;