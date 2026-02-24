function TaskItem({ task, setTasks }) {
  const updateStatus = (status) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, status } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <p>
        <b>Priority:</b> {task.priority}
      </p>
      <p>
        <b>Status:</b> {task.status}
      </p>

      <select
        value={task.status}
        onChange={(e) => updateStatus(e.target.value)}
      >
        <option>Todo</option>
        <option>InProgress</option>
        <option>Completed</option>
      </select>

      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;