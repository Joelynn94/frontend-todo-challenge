import React from 'react';

const TodoFilter = ({
  filtered,
  status,
  onShowAllTodos,
  onShowActiveTodos,
  onShowCompletedTodos,
  onCompleteTodo,
  onRemoveTodo,
  onClearCompletedTodos,
}) => {
  return (
    <div className='todo-filters'>
      <span className='todo-filters__text'>
        {filtered.length > 1
          ? `${filtered.length} items left`
          : `${filtered.length} item left`}
      </span>
      <button
        className={
          status === 'all'
            ? 'todo-filters__all active-link'
            : 'todo-filters__all'
        }
        onClick={onShowAllTodos}
      >
        All
      </button>
      <button
        className={
          status === 'active'
            ? 'todo-filters__active active-link'
            : 'todo-filters__active '
        }
        onClick={onShowActiveTodos}
      >
        Active
      </button>
      <button
        className={
          status === 'completed'
            ? 'todo-filters__completed active-link'
            : 'todo-filters__completed'
        }
        onClick={onShowCompletedTodos}
      >
        Completed
      </button>
      <button className='todo-filters__clear' onClick={onClearCompletedTodos}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFilter;
