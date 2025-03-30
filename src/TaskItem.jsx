const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
      <div>
        <span 
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
          onClick={() => toggleComplete(task.id)}
        >
          {task.text}
        </span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  