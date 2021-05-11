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
    } else {
      setTheme('light');
    }
  }

  return (
    <>
      <div
        className='app-header'
        style={{ backgroundImage: 'url(/images/bg-desktop-light.jpg)' }}
      >
        <div className='container'>
          <header className='todo-header'>
            <h1 className='heading'>TODO App</h1>
            <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
            <TodoInput />
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
