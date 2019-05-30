import React from 'react';

const TodoForm = ({ formField, clickHandler, changeHandler }) => {
  return (
    <div>
      <form>
        <input onChange={changeHandler} value={formField} />
        <button id="addTaskButton" onClick={clickHandler}>Add Task</button>
        <button id="clearCompletedButton" onClick={clickHandler}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;