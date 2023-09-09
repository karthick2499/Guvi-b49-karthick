import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('notCompleted');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    
    const initialTodos = [
      { id: 1, taskName: 'Task 1', description: 'Description 1', status: 'notCompleted' },
      { id: 2, taskName: 'Task 2', description: 'Description 2', status: 'completed' },
    ];

    setTodos(initialTodos);
  }, []);

  const addTodo = () => {
    if (taskName.trim() === '' || description.trim() === '') {
      alert('Task Name and Description cannot be empty.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      taskName,
      description,
      status,
    };

    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
    setStatus('notCompleted');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = newStatus;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My Todo</h1>
      <div>
        <label>Todo Name</label>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>
      <div>
        <label>Todo Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="notCompleted">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <label>Status Filter</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => updateStatus(todo.id, 'completed')}>Completed</button>
            <button onClick={() => updateStatus(todo.id, 'notCompleted')}>Not Completed</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
