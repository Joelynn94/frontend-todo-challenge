import React from 'react';

const EditTodoForm = ({
  currentTodo,
  setCurrentTodo,
  onUpdateTodo,
  setIsEditing,
}) => {
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    onUpdateTodo(currentTodo.id, currentTodo);
  }

  return (
    <form className='edit-input' onSubmit={handleEditFormSubmit}>
      <label htmlFor='editTodo'>
        <input
          id='editTodo'
          name='editTodo'
          type='text'
          placeholder='Edit todo'
          value={currentTodo.text}
          onChange={handleEditInputChange}
        />
        <button
          className='btn-update'
          type='submit'
          onClick={handleEditFormSubmit}
        >
          Update
        </button>
        <button className='btn-cancel' onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </label>
    </form>
  );
};

export default EditTodoForm;
