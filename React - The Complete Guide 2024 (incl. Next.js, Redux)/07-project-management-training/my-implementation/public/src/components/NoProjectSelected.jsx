import NoProjectImg from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImg}
        alt="An empty task list"
      />
      <h2 className="text-2xl font-bold text-stone-500 mt-4">
        No project selected yet
      </h2>
      <p>Please select a project, or create a new one.</p>
      <Button onClick={onAddProject}>Add a new project</Button>
    </div>
  );
}
