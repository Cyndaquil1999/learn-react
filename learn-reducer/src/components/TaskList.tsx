import { useState } from "react";

// Taskの型定義
interface Task {
  id: number;
  text: string;
  done: boolean;
}

// TaskListの型定義
interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

// TaskListコンポーネント
export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

// Taskコンポーネントの型定義
interface TaskProps {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

function Task({ task, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}