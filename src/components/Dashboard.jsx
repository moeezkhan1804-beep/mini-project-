function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;
  const pending = total - completed;

  return (
    <div className="dashboard">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
    </div>
  );
}

export default Dashboard;