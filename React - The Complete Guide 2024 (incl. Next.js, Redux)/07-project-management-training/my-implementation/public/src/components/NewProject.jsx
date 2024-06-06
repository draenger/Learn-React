import { useRef } from "react";

import Input from "./Input";

export default function NewProject({ onAddProject, onCancel }) {
  const projectName = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();

  function handleSave() {
    const name = projectName.current.value;
    const description = projectDescription.current.value;
    const dueDate = projectDueDate.current.value;

    onAddProject({
      name: name,
      description: description,
      dueDate: dueDate,
    });
  }

  function handleCancel() {
    onCancel();
  }

  return (
    <div className="flex flex-col gap-4">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      <div className="gap-4">
        <Input ref={projectName} type="text" label="Name" />
        <Input ref={projectDescription} label="Description" textarea />
        <Input ref={projectDueDate} type="date" label="Due Date" />
      </div>
    </div>
  );
}
