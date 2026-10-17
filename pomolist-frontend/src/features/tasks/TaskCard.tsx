import type { Task } from "../../types/Task";
import "./TaskCard.css";

type TaskCardProps = {
  task: Task;
};

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article
      className={`task-card ${task.completed ? "task-card--completed" : ""}`}
    >
      <span className="task-card__checkbox" aria-hidden="true">
        {task.completed ? "" : ""}
      </span>

      <span className="task-card__title">{task.title}</span>
    </article>
  );
}
