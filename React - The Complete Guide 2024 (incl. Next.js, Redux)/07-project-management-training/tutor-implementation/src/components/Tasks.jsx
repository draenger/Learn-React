import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  let content = (
    <p className="text-stone-800 my-4">This project has no tasks yet.</p>
  );
  if (tasks.length > 0) {
    content = (
      <ul className="p-4 my-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
          <li className="flex justify-between my-4" key={task.id}>
            <span className="text-stone-800">{task.name}</span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-stone-700 hover:text-red-500"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {content}
    </section>
  );
}
