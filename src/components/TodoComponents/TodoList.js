import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, toggleCompleted}) => {
  return(
    <div>
      {todoList.map(task => {
        return(
        <div key={task.id}>
          <Todo todo={task} toggleCompleted={toggleCompleted} />
        </div>
        )
      })}
    </div>
  )
}

export default TodoList;