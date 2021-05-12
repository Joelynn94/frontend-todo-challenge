import React from 'react';

const TodoFilter = ({
  todos,
  filtered,
  activeLink,
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
        {todos.length > 0
          ? `${todos.length} items left`
          : `${todos.length} item left`}
      </span>
      <button
        className={
          activeLink === 'all'
            ? 'todo-filters__all active-link'
            : 'todo-filters__all'
        }
        onClick={onShowAllTodos}
      >
        All
      </button>
      <button
        className={
          activeLink === 'active'
            ? 'todo-filters__active active-link'
            : 'todo-filters__active '
        }
        onClick={onShowActiveTodos}
      >
        Active
      </button>
      <button
        className={
          activeLink === 'completed'
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
