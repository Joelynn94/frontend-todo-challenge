import React from 'react';

const TodoInput = ({ todo, onInputChange, onFormSubmit }) => {
  return (
    <form className='todo-input' onSubmit={onFormSubmit}>
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
