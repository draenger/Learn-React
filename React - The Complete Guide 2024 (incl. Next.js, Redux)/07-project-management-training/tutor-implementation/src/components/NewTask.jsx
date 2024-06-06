import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChage(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleChage}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-600 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
