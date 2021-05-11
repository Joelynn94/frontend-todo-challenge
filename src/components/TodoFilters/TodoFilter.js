import React from 'react';

const TodoFilter = () => {
  return (
    <div className='todo-filters'>
      <span className='todo-filters__text'>5 Item(s) left</span>
      <button className='todo-filters__all active-link'>All</button>
      <button className='todo-filters__active'>Active</button>
      <button className='todo-filters__completed'>Completed</button>
      <button className='todo-filters__clear'>Clear Completed</button>
    </div>
  );
};

export default TodoFilter;
