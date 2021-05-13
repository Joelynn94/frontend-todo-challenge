import React from 'react';

const TodoItem = ({ todo, onCompleteTodo, onRemoveTodo }) => {
  return (
    <li className={todo.isCompleted ? 'todo-item todo-completed' : 'todo-item'}>
      <button className='todo-btn' onClick={() => onCompleteTodo(todo.id)}>
        {todo.isCompleted && (
          <span className='todo-btn__check'>
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
              <path
                fill='none'
                stroke='#FFF'
                strokeWidth='2'
                d='M1 4.304L3.696 7l6-6'
              />
            </svg>
          </span>
        )}
      </button>
      <p>{todo.text}</p>
      <button className='todo-delete' onClick={() => onRemoveTodo(todo.id)}>
        <span className='todo-delete__x'>
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
            <path
              fill='#494C6B'
              fillRule='evenodd'
              d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
            />
          </svg>
        </span>
      </button>
    </li>
  );
};

export default TodoItem;
