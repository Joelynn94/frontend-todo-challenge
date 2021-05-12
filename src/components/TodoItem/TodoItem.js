import React from 'react';

const TodoItem = ({ todo, onCompleteTodo }) => {
  return (
    <li className={todo.isCompleted ? 'todo-item todo-completed' : 'todo-item'}>
      <button
        className='todo-btn'
        onClick={() => onCompleteTodo(todo.id)}
      ></button>
      <p>{todo.text}</p>
    </li>
  );
};

export default TodoItem;
