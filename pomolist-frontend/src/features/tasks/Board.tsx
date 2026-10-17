import type { Task } from "../../types/Task";
import { TaskCard } from "./TaskCard";
import "./Board.css";

const days = [
  { id: "mon", label: "Segunda" },
  { id: "tue", label: "Terça" },
  { id: "wed", label: "Quarta" },
  { id: "thu", label: "Quinta" },
  { id: "fri", label: "Sexta" },
  { id: "sat", label: "Sábado" },
  { id: "sun", label: "Domingo" },
];

const initialTasks: Task[] = [
  { id: "1", title: "Estudar React", day: "mon", completed: false },
  { id: "2", title: "Ler 20 páginas", day: "mon", completed: false },
  { id: "3", title: "Praticar TypeScript", day: "tue", completed: false },
  { id: "4", title: "Resolver exercícios", day: "tue", completed: true },
  { id: "5", title: "Desenvolver o PomoList", day: "wed", completed: false },
  { id: "6", title: "Estudar estruturas de dados", day: "thu", completed: false },
  { id: "7", title: "Revisar a semana", day: "fri", completed: false },
  { id: "8", title: "Organizar a próxima semana", day: "sat", completed: false },
];

export function Board() {
  return (
    <section className="weekly-board" aria-label="Quadro semanal de atividades">
      <header className="weekly-board__header">
        <div>
          <p className="weekly-board__eyebrow">MEU ESPAÇO DE ORGANIZAÇÃO</p>
          <h1>Minha semana<span className="hand-drawn-star"></span></h1>
          <p className="weekly-board__subtitle">
            Uma coisa de cada vez. Um dia de cada vez.
          </p>
        </div>

        <span className="weekly-board__week-label">PLANNER Nº 01</span>
      </header>

      <div className="weekly-board__paper">
        {days.map((day) => {
          const tasks = initialTasks.filter(
            (task) => task.day === day.id
          );

          return (
            <section className="day-column" key={day.id}>
              <h2 className="day-column__title">{day.label}</h2>

              <div className="day-column__tasks">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}

                <button
                  className="day-column__add"
                  type="button"
                  aria-label={`Adicionar atividade para ${day.label}`}
                  title="Em breve: adicionar atividade"
                  disabled
                >
                  + adicionar
                </button>
              </div>
            </section>
          );
        })}
      </div>

      <footer className="weekly-board__footer">
        <span>feito à mão, no seu ritmo.</span>
        <span>uma semana de cada vez ↗</span>
      </footer>
    </section>
  );
}
