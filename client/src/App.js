import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import InputTodo from "./components/InputTodo"
import ListTodo from "./components/ListTodo"

function App() {
  return (
    <>
      <Container>
        <h1>PERN Todo App</h1>
        <InputTodo />
        <ListTodo />
      </Container>
    </>
  );
}

export default App;
