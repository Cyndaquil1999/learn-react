import { useState } from "react";

export function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
