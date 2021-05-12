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
  const [activeLink, setActiveLink] = useState('all');

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

  function completeTodo(id) {
    const completed = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted, isActive: !todo.isActive }
        : todo;
    });
    setTodos(completed);
  }

  function removeTodo(id) {
    const remove = todos.map((todo) => {
      return todo.id !== id;
    });
    setTodos(remove);
  }

  function showAllTodos() {
    setFiltered(todos);
    setActiveLink('all');
  }

  function showActiveTodos() {
    setFiltered(todos.filter((todo) => todo.isActive));
    setActiveLink('active');
  }

  function showCompletedTodos() {
    setFiltered(todos.filter((todo) => todo.isCompleted));
    setActiveLink('completed');
  }

  function clearCompletedTodos() {
    const clear = todos.filter((todo) => {
      return todo.isCompleted !== true;
    });
    setTodos(clear);
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
