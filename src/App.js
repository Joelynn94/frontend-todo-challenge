import { useState } from 'react';

import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [bgImage, setbgImage] = useState('');
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [isCompleted, setIsCompleted] = useState([]);

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
        todo,
      },
    ]);
    setTodo('');
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
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
