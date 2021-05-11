import React, { useState } from 'react'

function InputTodo() {
  const [description, setDescription] = useState("")

  const onFormSubmit = async(e) => {
    e.preventDefault()
    try {
      const data = { todo_description: description }
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input 
          type="text" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>   
    </div>
  )
}

export default InputTodo
