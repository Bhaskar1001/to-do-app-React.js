import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      const newTask = {
        text: input,
        completed: false
      };
      setTasks([...tasks, newTask]);  // ✅ now pushing the object
      setInput('');
    }
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const toggleComplete = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>📝 My Todo App</h1>
      <input
        type="text"
        placeholder="Add task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <TodoList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
    </div>
  );
}

export default App;
