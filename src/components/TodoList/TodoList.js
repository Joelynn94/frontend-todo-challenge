import React from 'react';
import TodoFilter from '../TodoFilters/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({
  todos,
  onFilterActiveTodos,
  onFilterCompletedTodos,
  onChangeCompletedTodo,
}) => {
  console.log(todos);
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <TodoFilter
        todos={todos}
        onFilterActiveTodos={onFilterActiveTodos}
        onFilterCompletedTodos={onFilterCompletedTodos}
        onChangeCompletedTodo={onChangeCompletedTodo}
      />
    </ul>
  );
};

export default TodoList;
