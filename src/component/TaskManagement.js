import React, { useState } from "react";

// Develop a React Task Management Application where users can create, read, update, and delete tasks with properties like title, description, dueDate, and completion status.

function TaskManagement() {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "" });
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!task.trim()) return;

    if (edit) {
      setTasks(tasks.map((t) => (t.id === edit ? { ...t, ...task } : t)));
      setEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
    setTask({ title: "", description: "", dueDate: "" });
  };

  const DeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const UpdateTask = (t) => {
    setTask({ title: t.title, description: t.description, dueDate: t.dueDate });
    setEdit(t.id);
  };

  return (
    <div>
      <h1>Task Management Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <br />
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <br />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
        <br />
        <button type="Submit">{edit ? "Update" : "Create"}</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <h5>{t.title}</h5> - {t.description} (Due:{" "}
            {t.dueDate || "No Due Date"})
            <br />
            {/* {t.title} {t.description} ({t.dueDate}) */}
            <button onClick={() => UpdateTask(t)}>Edit</button>
            <button onClick={() => DeleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagement;
