import Button from "./Button";

export default function ProjectsSidebar({
  projects,
  onProjectAdd,
  onProjectSelect,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <p className="text-stone-50 mb-4">Your Projects</p>
      <Button onClick={onProjectAdd}>+ Add Project</Button>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mt-4">
            <button
              onClick={() => onProjectSelect(project.id)}
              className="w-full text-left px-2 pybuttonnded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
