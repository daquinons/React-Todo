import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  return(
    <div>
      {todoList.map(task => {
        return(
        <div>
          <Todo todo={task} />
        </div>
        )
      })}
    </div>
  )
}

export default TodoList;