import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className='container'>
      <header className='todo-header'>
        <h1 className='heading'>TODO App</h1>
        <ThemeToggle />
        <TodoInput />
      </header>
      <main className='todo-main'>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
