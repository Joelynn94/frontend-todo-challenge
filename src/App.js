import { useState } from 'react';

import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);

  function handleThemeChange() {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#171823';
    } else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
    }
  }

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        isCompleted: false,
        isActive: true,
      },
    ]);
    setTodo('');
  }

  function changeCompletedTodo(id) {
    const completed = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted, isActive: !todo.isActive }
        : todo;
    });
    setTodos(completed);
  }

  function removeItem(id) {
    const remove = todos.map((todo) => {
      return todo.id !== id;
    });
    setTodos(remove);
  }

  function showAllTodos() {
    setFiltered(todos);
  }

  function showActiveTodos(todos) {
    setFiltered(todos.filter((todo) => todo.isActive));
  }

  function showCompletedTodos(todos) {
    setFiltered(todos.filter((todo) => todo.isCompleted));
  }

  return (
    <>
      <div
        className='app-header'
        style={
          theme === 'light'
            ? { backgroundImage: 'url(/images/bg-desktop-light.jpg)' }
            : { backgroundImage: 'url(/images/bg-desktop-dark.jpg)' }
        }
      >
        <div className='container'>
          <header className='todo-header'>
            <h1 className='heading'>TODO App</h1>
            <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
            <TodoInput
              onFormSubmit={handleFormSubmit}
              todo={todo}
              onInputChange={handleInputChange}
            />
          </header>
        </div>
      </div>
      <main className='todo-main'>
        <div className='container'>
          <TodoList
            todos={todos}
            onFilterActiveTodos={filterActiveTodos}
            onFilterCompletedTodos={filterCompletedTodos}
            onChangeCompletedTodo={changeCompletedTodo}
          />
        </div>
      </main>
    </>
  );
}

export default App;
