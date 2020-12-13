import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditTodo({edit}) {
  const [description, setDescription] = useState(edit.todo_description)

  console.log(edit)
  return (
    <>
      <button>Edit</button>
    </>
  )
}

export default EditTodo
