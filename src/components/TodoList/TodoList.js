import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
  filtered,
  todoInputValue,
  onCompleteTodo,
  onRemoveTodo,
  onEditButtonClick,
}) => {
  return (
    <ul className='todo-list'>
      {filtered.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoInputValue={todoInputValue}
          onCompleteTodo={onCompleteTodo}
          onRemoveTodo={onRemoveTodo}
          onEditButtonClick={onEditButtonClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
