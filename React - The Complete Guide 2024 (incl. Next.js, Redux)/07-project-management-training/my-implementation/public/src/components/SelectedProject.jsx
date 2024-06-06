import { useRef } from "react";

export default function SelectedProject({
  id,
  name,
  description,
  dueDate,
  tasks,
  onAddTask,
  onRemoveTask,
  onRemoveProject,
}) {
  const taskName = useRef();

  function handleAddTask() {
    const newTaskName = taskName.current.value;
    taskName.current.value = "";

    onAddTask(newTaskName);
  }

  function handleRemoveTask(taskId) {
    onRemoveTask(taskId);
  }

  function handleRemoveProject() {
    onRemoveProject(id);
  }

  return (
    <div className="w-2/3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-stone-500">{name}</h2>
        <button
          onClick={handleRemoveProject}
          className="text-stone-700 hover:text-red-500"
        >
          Delete
        </button>
      </div>
      <p className="mb-4 text-stone-400">{dueDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      <hr />
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div>
        <input
          ref={taskName}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAddTask}
          className="text-stone-600 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              <p className="text-stone-800 my-4">{task.name}</p>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
