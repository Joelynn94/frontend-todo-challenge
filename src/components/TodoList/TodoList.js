import React from 'react';
import TodoFilter from '../TodoFilters/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
  todos,
  filtered,
  onShowAllTodos,
  onShowActiveTodos,
  onShowCompletedTodos,
  onCompleteTodo,
  onRemoveTodo,
}) => {
  console.log(todos);
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
      ))}
      <TodoFilter
        todos={todos}
        filtered={filtered}
        onShowAllTodos={onShowAllTodos}
        onShowActiveTodos={onShowActiveTodos}
        onShowCompletedTodos={onShowCompletedTodos}
        onCompleteTodo={onCompleteTodo}
        onRemoveTodo={onRemoveTodo}
      />
    </ul>
  );
};

export default TodoList;
