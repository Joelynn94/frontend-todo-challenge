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

  // save theme and todos to local storage
  function saveLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  // get theme and todos from local storage
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

  // add and remove light/dark class to the document body
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

  // handle the todo input change
  function handleInputChange(e) {
    setTodo(e.target.value.trim());
  }

  // handle when user submits inside the input
  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== '') {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo,
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
    console.log(todo);
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
