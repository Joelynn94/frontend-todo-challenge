import React from 'react';

const FilteredTodoItem = ({ filtered }) => {
  return (
    <li
      className={
        filtered.isCompleted ? 'todo-item todo-completed' : 'todo-item'
      }
    >
      <button
        className='todo-btn'
        onClick={() => onChangeCompletedTodo(filtered.id)}
      ></button>
      <p>{filtered.text}</p>
    </li>
  );
};

export default FilteredTodoItem;
