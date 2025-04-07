function TodoItem({ task, index, onDelete }) {
    return (
      <li style={{ margin: '10px 0' }}>
        {task}
        <button style={{ marginLeft: 10 }} onClick={() => onDelete(index)}>
          ❌
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  