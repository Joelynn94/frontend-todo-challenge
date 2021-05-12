import React from 'react';

const TodoFilter = ({
  todos,
  onShowAllTodos,
  onShowActiveTodos,
  onShowCompletedTodos,
  onCompleteTodo,
  onRemoveTodo,
}) => {
  return (
    <div className='todo-filters'>
      <span className='todo-filters__text'>
        {todos.length > 0
          ? `${todos.length} items left`
          : `${todos.length} item left`}
      </span>
      <button
        className='todo-filters__all active-link'
        onClick={onShowAllTodos}
      >
        All
      </button>
      <button className='todo-filters__active' onClick={onShowActiveTodos}>
        Active
      </button>
      <button
        className='todo-filters__completed'
        onClick={onShowCompletedTodos}
      >
        Completed
      </button>
      <button className='todo-filters__clear'>Clear Completed</button>
    </div>
  );
};

export default TodoFilter;
