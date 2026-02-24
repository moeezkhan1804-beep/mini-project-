import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;