import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancelAddProject }) {
  const projectTitle = useRef();
  const projectDescription = useRef();
  const projectDueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const title = projectTitle.current.value;
    const description = projectDescription.current.value;
    const dueDate = projectDueDate.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: title,
      description: description,
      dueDate: dueDate,
    });
  }

  function handleCancel() {
    onCancelAddProject();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to fill in all the fields.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to fill in all the fields before saving the project.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="gap-4">
          <Input ref={projectTitle} type="text" label="Title" />
          <Input ref={projectDescription} label="Description" textarea />
          <Input ref={projectDueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
