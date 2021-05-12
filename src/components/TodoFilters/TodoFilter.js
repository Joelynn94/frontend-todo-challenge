import React from 'react';

const TodoFilter = ({ todos, onFilterActiveTodos, onFilterCompletedTodos }) => {
  return (
    <div className='todo-filters'>
      <span className='todo-filters__text'>
        {todos.length > 0
          ? `${todos.length} items left`
          : `${todos.length} item left`}
      </span>
      <button className='todo-filters__all active-link' onClick={() => true}>
        All
      </button>
      <button
        className='todo-filters__active'
        onClick={() => onFilterActiveTodos(todos)}
      >
        Active
      </button>
      <button
        className='todo-filters__completed'
        onClick={() => onFilterCompletedTodos(todos)}
      >
        Completed
      </button>
      <button className='todo-filters__clear'>Clear Completed</button>
    </div>
  );
};

export default TodoFilter;
