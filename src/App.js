import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <>
      <div
        className='app-header'
        style={{ backgroundImage: 'url(/images/bg-desktop-light.jpg)' }}
      >
        <div className='container'>
          <header className='todo-header'>
            <h1 className='heading'>TODO App</h1>
            <ThemeToggle />
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
