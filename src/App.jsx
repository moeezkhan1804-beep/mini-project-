import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filters, setFilters] = useState({
    status: "All",
    priority: "All",
  });

  const filteredTasks = tasks.filter((task) => {
    if (filters.status !== "All" && task.status !== filters.status)
      return false;
    if (filters.priority !== "All" && task.priority !== filters.priority)
      return false;
    return true;
  });

  return (
    <div className="container">
      <h1>Smart Task Manager</h1>
      <Dashboard tasks={tasks} />
      <TaskForm setTasks={setTasks} />
      <Filters setFilters={setFilters} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;