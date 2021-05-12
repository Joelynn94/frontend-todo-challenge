import { useState, useEffect } from 'react';

import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  // useEffect to update the UI
  useEffect(() => {
    filterHandler();
    getLocalStorage();
    saveLocalStorage();
  }, [todos, status, theme]);

  function saveLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  function getLocalStorage() {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', JSON.stringify(''));
    } else {
      localStorage.setItem('theme', JSON.stringify(theme));
    }
  }

  function handleThemeChange() {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      setTheme('light');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
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

  function completeTodo(id) {
    const completed = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted, isActive: !todo.isActive }
        : todo;
    });
    setTodos(completed);
  }

  function removeTodo(id) {
    const removed = todos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(todo);
    setTodos(removed);
  }

  function showAllTodos() {
    setFiltered(todos);
    setStatus('all');
  }

  function showActiveTodos() {
    setFiltered(todos.filter((todo) => todo.isActive));
    setStatus('active');
  }

  function showCompletedTodos() {
    setFiltered(todos.filter((todo) => todo.isCompleted));
    setStatus('completed');
  }

  function clearCompletedTodos() {
    const clear = todos.filter((todo) => {
      return todo.isCompleted !== true;
    });
    setTodos(clear);
  }

  function filterHandler() {
    switch (status) {
      case 'active':
        showActiveTodos();
        break;
      case 'completed':
        showCompletedTodos();
        break;
      default:
        showAllTodos();
        break;
    }
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
            filtered={filtered}
            status={status}
            onShowAllTodos={showAllTodos}
            onShowActiveTodos={showActiveTodos}
            onShowCompletedTodos={showCompletedTodos}
            onCompleteTodo={completeTodo}
            onRemoveTodo={removeTodo}
            onClearCompletedTodos={clearCompletedTodos}
          />
        </div>
      </main>
    </>
  );
}

export default App;
