import React from 'react';
import TodoFilter from '../TodoFilters/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  return (
    <ul className='todo-list'>
      <TodoItem />
      <TodoFilter />
    </ul>
  );
};

export default TodoList;
