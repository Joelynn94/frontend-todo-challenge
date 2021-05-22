import React from 'react';

const AddTodoForm = ({ todo, onInputChange, onFormSubmit }) => {
  return (
    <form className='todo-input' onSubmit={onFormSubmit}>
      <label htmlFor='todo'>
        <input
          id='todo'
          name='todo'
          type='text'
          placeholder='Create a new todo'
          value={todo}
          onChange={onInputChange}
        />
      </label>
    </form>
  );
};

export default AddTodoForm;
