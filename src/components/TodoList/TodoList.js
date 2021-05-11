import React from 'react';
import TodoFilter from '../TodoFilters/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  return (
    <ul>
      <TodoItem />
      <TodoFilter />
    </ul>
  );
};

export default TodoList;
