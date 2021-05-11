import React from 'react';

const TodoInput = ({ todo, onInputChange }) => {
  return (
    <form className='todo-input'>
      <input
        name='todo'
        type='text'
        placeholder='Create a new todo'
        value={todo}
        onChange={onInputChange}
      />
    </form>
  );
};

export default TodoInput;
