import React from 'react';

const TodoItem = ({ todo, onChangeCompletedTodo }) => {
  return (
    <li className={todo.isCompleted ? 'todo-item todo-completed' : 'todo-item'}>
      <button
        className='todo-btn'
        onClick={() => onChangeCompletedTodo(todo.id)}
      ></button>
      <p>{todo.text}</p>
    </li>
  );
};

export default TodoItem;
