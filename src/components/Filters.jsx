function Filters({ setFilters }) {
  return (
    <div className="filters">
      <select
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, status: e.target.value }))
        }
      >
        <option>All</option>
        <option>Todo</option>
        <option>InProgress</option>
        <option>Completed</option>
      </select>

      <select
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, priority: e.target.value }))
        }
      >
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
}

export default Filters;