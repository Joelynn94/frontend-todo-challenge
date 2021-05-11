import './App.css';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className='App'>
      <h1>TODO App</h1>
      <ThemeToggle />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
