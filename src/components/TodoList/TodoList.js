import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ filtered, onCompleteTodo, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
