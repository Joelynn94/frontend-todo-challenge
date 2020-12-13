import React, { useEffect, useState } from 'react'
import EditTodo from "./EditTodo"

import Table from 'react-bootstrap/Table';

function ListTodo() {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos")
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteOneTodo = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE"
      })

      setTodos(todos.filter(todo => todo.todo_id !== id))
      console.log(deleteOneTodo)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])


   console.log(todos)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.todo_id}</td>
              <td>{todo.todo_description}</td>
              <td>
                <EditTodo edit={todo} />
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ListTodo
