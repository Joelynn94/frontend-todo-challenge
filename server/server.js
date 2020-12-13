require("dotenv").config()
const express = require('express')
const app = express()
const cors = require("cors")
const db = require("./db")
// Port to use
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// ROUTES 
app.post("/todos", async(req, res) => {
  try {
    const { todo_description } = req.body
    const createTodo = await db.query("INSERT INTO todo (todo_description) VALUES($1) RETURNING *", [todo_description])
    res.json(createTodo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

app.get("/todos", async(req, res) => {
  try {
    const getTodos = await db.query("SELECT * FROM todo")
    res.json(getTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.get("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params
    const getOneTodo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.json(getOneTodo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

app.put("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params
    const { todo_description } = req.body
    const updateTodo = await db.query("UPDATE todo SET todo_description = $1 WHERE todo_id = $2", [todo_description, id])
    res.json(`Todo item #${id} was updated`)
  } catch (error) {
    console.error(error.message)
  }
})

app.delete("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.json(`Todo item #${id}: was deleted`)
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})