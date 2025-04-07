import React from 'react';

function TodoList({ tasks, onDelete, onToggle }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Your Tasks</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => onToggle(index)}
            style={{
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#888' : '#000',
              cursor: 'pointer'
            }}
          >
            <span>{task.text}</span> {/* ✅ Show task text here */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(index);
              }}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              Delete ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
