import { useState, useEffect } from 'react';

import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import TodoFilters from './components/TodoFilters/TodoFilter';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem('dark_theme') === 'true'
  );
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  // useEffect to update the UI
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('dark_theme', darkTheme);
    if (darkTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    filterHandler();
    // eslint-disable-next-line
  }, [todos, status, darkTheme]);

  // add and remove light/dark class to the document body
  function handleThemeChange() {
    setDarkTheme(!darkTheme);
  }

  // handle the todo input change
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  // handle when user submits inside the input
  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
          isCompleted: false,
          isActive: true,
        },
      ]);
    }
    setTodo('');
  }

  // change a todo's status i.e. complete and active status to the opposite of what they were previously
  function completeTodo(id) {
    const completed = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted, isActive: !todo.isActive }
        : todo;
    });
    setTodos(completed);
  }

  // remove a todo based in the id that was clicked
  function removeTodo(id) {
    const removed = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removed);
  }

  // show all of the todos
  function showAllTodos() {
    setFiltered(todos);
    setStatus('all');
  }

  // show only todos that are active
  function showActiveTodos() {
    setFiltered(todos.filter((todo) => todo.isActive));
    setStatus('active');
  }

  // show only todos that are completed
  function showCompletedTodos() {
    setFiltered(todos.filter((todo) => todo.isCompleted));
    setStatus('completed');
  }

  // clear all of the completed todos
  function clearCompletedTodos() {
    const clear = todos.filter((todo) => {
      return todo.isCompleted !== true;
    });
    setTodos(clear);
  }

  // function to handle the different statuses
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
          darkTheme
            ? {
                background:
                  'url(/images/bg-desktop-dark.jpg) center center/cover no-repeat',
              }
            : {
                background:
                  'url(/images/bg-desktop-light.jpg) center center/cover no-repeat',
              }
        }
      >
        <div className='container'>
          <header className='todo-header'>
            <h1 className='heading'>TODO APP</h1>
            <ThemeToggle
              darkTheme={darkTheme}
              onThemeChange={handleThemeChange}
            />
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
          <TodoFilters
            filtered={filtered}
            status={status}
            onShowAllTodos={showAllTodos}
            onShowActiveTodos={showActiveTodos}
            onShowCompletedTodos={showCompletedTodos}
            onClearCompletedTodos={clearCompletedTodos}
          />
        </div>
      </main>
    </>
  );
}

export default App;
